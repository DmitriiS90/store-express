import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Row, Col } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { Context } from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data))  // получаем типы
        fetchBrands().then(data => device.setBrands(data))  // получаем бренды
        fetchDevices(null, null, 1, 4).then(data => {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })  // получаем устройства
    },[])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 4).then(data => {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })  
    },[device.selectedType, device.selectedBrand, device.page])
    
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList/>
                    {/* <Pages/> */}
                </Col>
            </Row>
        </Container>
    )
})

export default Shop