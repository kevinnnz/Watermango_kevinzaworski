import React from 'react';
import PlantsTable from './PlantsTable/PlantsTable';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <PlantsTable />
      </Container>
    </div>
  );
}

export default App;
