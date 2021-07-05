import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'; //чтобы mobx иог отслеживать изменения
import { Card, Row } from 'react-bootstrap'
import { Context } from '../index';

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: "pointer" }}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    key={brand.id}
                    className="p-3"
                    onClick={() => { device.setSelectedBrand(brand) }}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar