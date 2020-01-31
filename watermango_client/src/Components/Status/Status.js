import React from 'react';
import moment from 'moment';
import Alert from 'react-bootstrap/Alert';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() { 

        if( this.props.isWateringComplete && this.props.isWatering ) {
            return (
                <Alert className="text-center align-middle" variant="success"> Watering in Complete! </Alert>
            )
        } else if( this.props.isWatering ){
            return (
                <Alert className="text-center align-middle" variant="primary"> Watering in Progress </Alert>
            )
        } 

        return ( 
            <></> 
        )
    }
}
 
export default Status;