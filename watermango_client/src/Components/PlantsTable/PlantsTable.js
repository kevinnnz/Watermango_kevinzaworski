import React from 'react';
import update from 'react-addons-update'; 
import moment from 'moment';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Plant from '../Plant/Plant';

class PlantsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            plants: [],
        }
    }

    componentDidMount() {
        this.getDataFromDatabase();
    }

    getDataFromDatabase() {
        fetch('https://localhost:44367/api/Plants').then(result => {
            return result.json();
        }).then(data => {
            this.setState({ plants : data });
        });
    }

    render() { 
        return (
            <>
                <Row> 
                    <Col lg>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Plant Name</th>
                                <th className="text-center">Last Watering Session</th>
                                <th className="text-center">Duration</th>
                                <th className="text-center">Controls</th>
                                <th className="text-center">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.state.plants.map(plant => (
                                    <tr key={ plant.id }>
                                        <Plant plant={ plant } />
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        );
    }
}
 
export default PlantsTable;