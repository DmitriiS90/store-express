import React, { useContext, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';  //useLocation позволяет видеть данные локации
import { observer } from 'mobx-react-lite';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../index';

const Auth = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE  //пользователь залогинен если путь строго равен '/login'
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                console.log()
            }
            user.setIsUser(data)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)

        }
    }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    ></Form.Control>
                    <Row className="d-flex justify-content-between mt-2 pl-3 pr-3">
                        <div>
                            {isLogin
                                ? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                                : <NavLink to={LOGIN_ROUTE}>Войти в аккаунт</NavLink>
                            }
                        </div>
                        <Button onClick={click}>
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth