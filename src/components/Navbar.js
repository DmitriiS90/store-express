import React, { useContext } from 'react';
import { Context } from '../index';
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'; //чтобы mobx иог отслеживать изменения
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logout = () => {
        user.setIsUser({})
        user.setIsAuth(false)
    }

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>Магазин</NavLink>
                {user.isAuth
                    ? <Nav className="me-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => { history.push(ADMIN_ROUTE) }}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            className='ml-2'
                            onClick={() => { logout() }}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    : <Nav className="me-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>}
            </Container>
        </Navbar>

    )
})

export default NavBar