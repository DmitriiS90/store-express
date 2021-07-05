import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'; //чтобы mobx иог отслеживать изменения
import { Button, ListGroup } from 'react-bootstrap'
import { Context } from '../index';

const TypeBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor:"pointer"}}
                    active={type.id ===  device.selectedType.id}
                    key={type.id}
                    onClick={() => { device.setSelectedType(type) }}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar