import React from "react";
import NewTable from './NewTable';
import List from './List';
import { Container, Row, Col } from 'reactstrap';

class TestData extends React.Component {  
  state = {
    recorddata:null
  }
  async componentDidMount(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const json = await response.json();
    
    this.setState({ 
      recorddata: json
    });
  }

  

  render() {
    const {recorddata} = this.state;
    return (
        <>
            
            <Container>
            <h1>Table View</h1>
              {recorddata ?(
               
                <>           
                    <Row>
                        <Col xs="6" sm="4" md="4">
                            <List recorddata = {recorddata}/> 
                        </Col>
                        <Col xs="6" sm="4" md="4">
                            <NewTable recorddata = {recorddata}/>
                        </Col>
                    </Row>
                                     
                </>
              ):(
                <div>No Data Available to load....</div>
              )}
             
            
            </Container>
            
            
        </>
      );
    }
}
export default TestData;

