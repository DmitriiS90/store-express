import React, { useContext } from 'react';
import { Context } from '../index';
import { Button, Pagination } from 'react-bootstrap'

import { observer } from 'mobx-react-lite';


const Pages = observer(() => {
    const { device } = useContext(Context)
    //const pages = [1, 2, 3, 4, 5]
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)

    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={()=>{device.setPage(page)}}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages