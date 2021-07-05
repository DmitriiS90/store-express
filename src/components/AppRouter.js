//создаем все роуты
import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { Context } from '../index';  // импортируем контекст
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    
    return (
        <Switch>
            {user.isAuth === true && authRoutes.map(({path, Comment}) => {
                return <Route key={path} path={path} component={Comment} exact/>
            })}
            {publicRoutes.map(({path, Comment}) => {
                return <Route key={path} path={path} component={Comment} exact/>
            })}
            <Redirect to={SHOP_ROUTE}/> 
        </Switch>
    )
}

export default AppRouter