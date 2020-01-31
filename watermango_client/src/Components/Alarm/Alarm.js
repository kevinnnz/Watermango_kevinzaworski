import React from 'react';
import moment from 'moment';
import Alert from 'react-bootstrap/Alert';

class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sixHoursWarning : false,
         }
        this.checkItHasBeenSixHours = this.checkItHasBeenSixHours.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    } 

    checkItHasBeenSixHours() {
        // making sure that it hasn't been six hours since the plant has been watered
        let lastWatering = this.props.plant.water[this.props.plant.water.length - 1].date;
        if(moment(lastWatering).isBefore(moment().subtract(6, 'hours')) === true) {
            // return error alert
            return <Alert className="text-center align-middle" variant="danger"> Plant needs to be watered </Alert>;
        }  else {
            return <></>
        }
    }

    render() { 
            return ( 
                <> { 
                    this.checkItHasBeenSixHours() 
                }</>
             );
    }
}
 
export default Alarm;

