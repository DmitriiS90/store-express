import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { Spinner } from 'react-bootstrap';
import AppRouter from './components/AppRouter'; // импортируем все роуты
import NavBar from './components/Navbar';
import { Context } from '.';
import { check } from './http/userAPI';


const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {   //проверяем авторизован ли пользователь
      user.setIsUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])



  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
