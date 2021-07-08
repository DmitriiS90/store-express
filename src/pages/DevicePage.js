import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, Card, Button, Row, Col } from 'react-bootstrap';

import star from '../assets/star.png'
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    
    const [device, setDevice] = useState({ info:[] })
    const {id} = useParams() 
    
    useEffect(() => {
       fetchOneDevice(id).then(data => setDevice(data))
    },[])

    return (
        <Container>
            <Row>
                <Col md={4} className="mt-3">
                    <Image width={300} height={300} src={"http://localhost:5000/" + device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: "cover", fontSize: 50 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around mt-2"
                        style={{ width: 300, height: 300, fontSize: 35, border: "2px black solid" }}>
                        <h3>{device.price} руб.</h3>
                        <Button variant="outline-dark">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-2">
                <h1>Характеристика</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? "gray" : "transparent", padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>)
                }
            </Row>
        </Container>
    )
}

export default DevicePage