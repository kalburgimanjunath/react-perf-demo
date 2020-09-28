import React, { Profiler } from "react";
import NewTable from './NewTable';
import List from './List';
import ModalISP from './ModalISP';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

class Performance extends React.Component { 
  
  constructor(props){
    super();;
  }

  state = {
    recorddata:null,
    analyticsdata:null
  }
  componentWillUnmount(){
    console.log('component will mount called')
    
  }
  

  clockPerformance(profilerId, mode, actualTime, baseTime, startTime, commitTime) {  
    let testdata = [];
      
    testdata.push({
      profilerId, 
      mode, 
      actualTime, 
      baseTime, 
      startTime, 
      commitTime
    })   
    console.log({profilerId, mode, actualTime, baseTime, startTime, commitTime});
    localStorage.setItem(profilerId, JSON.stringify(testdata));
    
  }

  // onLocalStorage = (key,value)=>{    
  //   localStorage.setItem(key, JSON.stringify(value));
  // }
  async loadData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const json = await response.json();
    const localstore = JSON.parse(JSON.stringify(localStorage));
    
    this.setState({ 
      recorddata: json,
      analyticsdata: localstore
    });
  }

  

  render() {
    const {recorddata,analyticsdata} = this.state;
    return (
        <>
          <Container>
            <Button onClick={()=>this.loadData()}>Start</Button>
           
              {recorddata ?(
               
                <>
                  <ModalISP buttonLabel="Check Performance" modalTitle="Performance of Components" testdata={analyticsdata}/>
                  <h4>Fetched Data from 2 component list and table</h4>
                  <Row>
                        <Col xs="6" sm="4" md="6">
                          <Profiler id="Table" onRender={this.clockPerformance}>
                            <NewTable recorddata = {recorddata}/>                      
                          </Profiler>
                        </Col>
                        <Col xs="6" sm="4" md="6">
                        <Profiler id="List" onRender={this.clockPerformance}>
                          <List recorddata = {recorddata}/>
                        </Profiler>
                        </Col>
                  </Row>
                  
                </>
              ):(
                <div>No Data Available click button to load data....</div>
              )}
             
            
           
          </Container>
            
        </>
      );
    }
}
export default Performance;

