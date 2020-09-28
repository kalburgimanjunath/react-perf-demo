import React from 'react';
import { Table } from 'reactstrap';
function NewTable(props) {
  const recorddata = props.recorddata;
  return (
      <>
      {recorddata ? (
        <Table hover md="6">
        <tbody>
          <tr>
              <th>Id</th>
              <th>PostId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
          </tr>

          {recorddata.map((item)=>{
              return <tr key={item.id}>
              <td>{item.postId}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
              </tr>
          })}
          </tbody>
      </Table>
        ):(
          <div>Still loading the data...</div>
        )
      }
        
      </>
  );
}

export default React.memo(NewTable);
