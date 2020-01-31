import React from 'react';
import Button from 'react-bootstrap/Button';
import Status from '../Status/Status';
import Alarm from '../Alarm/Alarm';

class Plant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            plant : props.plant,
            water : props.plant.water,
            durationCounter : 0,
            stoppedWatering : false,
            isWatering : false,
            isWateringComplete: false
        }

        this.startWatering = this.startWatering.bind(this);
    }

    convertTime() {
        let d = new Date(this.state.water[this.state.water.length - 1].date);
        return d.toDateString() + ' ' + d.toLocaleTimeString();
    }

    getDuration() {
        return this.state.water[this.state.water.length - 1].duration;
    }

    durationTimer() {
        this.myInterval = setInterval(() => {
            if( this.state.durationCounter < 10) {
                this.setState(({ durationCounter }) => ({
                    durationCounter: durationCounter + 1
                  }))
            } else {
                clearInterval(this.myInterval);
                this.stopWatering();
            }
        }, 1000);
    }

    stopDurationTime() {
        // cancel count downtimer
        clearInterval(this.myInterval);
        // call stopWatering
        this.stopWatering();
    }

    startWatering() {       
        this.setState({ 
            isWatering : true,
            durationCounter : 0
        });
        
        // start the timer
        this.durationTimer();
    }

    stopWatering() {
        let plant = this.state.plant;

        let watering = {
            date : Date.now,
            duration : this.state.durationCounter,
            plantId : plant.id
        }

        this.setState({ isWateringComplete : true });

        // sending the watering to the database..
        fetch(`https://localhost:44367/api/Waters`, { 
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(watering)
        }).then(response => {
            this.getPlantFromDatabase();
            setTimeout(() => {
                this.setState({
                    isWatering : false,
                    isWateringComplete : false
                });
            }, 30000)
        });    
    }

    getPlantFromDatabase() {
        fetch(`https://localhost:44367/api/Plants/${this.state.plant.id}`).then(result => {
            return result.json();
        }).then(data => {
            this.setState({ 
                plant : data,
                water : data.water
            });
        });
    }

    render() { 
        return ( 
            <>
                <td className="text-center align-middle">{ this.state.plant.id }</td>
                <td className="text-center align-middle">{ this.state.plant.name }</td>
                <td className="text-center align-middle">{  this.convertTime() }</td>
                <td className="text-center align-middle">{ this.getDuration() } seconds</td>
                <td className="text-center align-middle">
                    <Button ref="waterBtn" disabled={ this.state.isWatering } onClick={() => this.startWatering() }>Water</Button> 
                    { " " } 
                    <Button variant="secondary" onClick={() => this.stopDurationTime() }>Stop Watering</Button>
                </td>
                <td className="align-middle">
                    <Status isWatering={this.state.isWatering} isWateringComplete={this.state.isWateringComplete} />
                    <Alarm plant={ this.state.plant } />
                </td>
            </>
         );
    }
}
 
export default Plant;