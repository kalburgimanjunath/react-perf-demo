import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import {
  Link
} from "react-router-dom";

function List(props) {
    const recorddata = props.recorddata;
  return (
    <div className="list">
      <h1>List View</h1>
      {recorddata.map((item)=>{
            return (
                <Card key={item.id}>
                    <CardBody className="justify-content-start">
                        <CardTitle><Link to="">{item.name}</Link></CardTitle>
                        <CardSubtitle>{item.email}</CardSubtitle>
                        <CardText>{item.body}</CardText>                    
                    </CardBody>
                </Card>
            );
            
        })}
    </div>
  );
}

export default React.memo(List);
