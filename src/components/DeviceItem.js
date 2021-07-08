import React, { useContext } from 'react';
import { Col, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory() 
    
    return (
        <Col md={3} className={"mt-2"} onClick={() => {history.push(DEVICE_ROUTE + "/" + device.id)}}>
            <Card style={{width:150, cursor:"pointer" }} border={"light"}>
              <Image width={150} height={150} src={"http://localhost:5000/" + device.img}/>
              <div className="text-black-50 d-flex justify-content-between align-items-center mt-3">
                  <div>UUUUUUUpppp</div>
                  <div className="d-flex align-items-center">
                      <div>{device.rating}</div>
                      <Image width={15} height={15} src={star}/>
                  </div>
              </div>
              <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem