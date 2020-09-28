import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalISP = (props) => {
  const {
    buttonLabel,
    className,
    modalTitle
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const localstore = JSON.parse(JSON.stringify(localStorage));
  const tempData = Object.values(localstore);
  const arrData =[];
  tempData.map((item)=>{
    return arrData.push(JSON.parse(item)[0]);
  });

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>       
          {arrData ? (             
              arrData.map((item)=>{
                return (

                  <div key={item.profilerId}>
                    <div><b>Component:{item.profilerId}</b></div>
                    <div>Mode:{item.mode}</div>
                    <div>actualTime:{item.actualTime}</div>
                    <div>baseTime:{item.baseTime}</div>
                    <div>startTime:{item.startTime}</div>
                    <div>commitTime:{item.commitTime}</div>
                  </div>
                )
                
              })
            ):(
              <div>Loading Performance data...</div>
            )
          }
          
          
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalISP;