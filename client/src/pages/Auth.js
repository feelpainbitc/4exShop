import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/Button';
import { NavLink,useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';


/**
* @author
* @function Auth
**/

export const Auth = (props) => {

    const location=useLocation();
    const isLogin=location.pathname===LOGIN_ROUTE

  return(
    <Container className="d-flex justify-content-center align-items-center"
    style={{height:window.innerHeight-54}}
    >
        <Card style={{width:600}} className="p-5">
            <h2 className="m-auto">{isLogin? "Авторизация" : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-3"
                    placeholder='Введите e-mail'
                />
                 <Form.Control
                    className="mt-3"
                    placeholder='Введите пароль'
                />
                <Form className="d-flex justify-content-between">
                {isLogin ?
                 <div className="mt-4">Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></div>
                 :
                 <div className="mt-4">Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                }
                <Button variant={"outline-dark"} className="mt-3 align-self-end">
                    {isLogin? "Войти" : "Зарегистрироваться"}
                </Button>
                </Form>
            </Form>
        </Card>
        
    </Container>
   )

 }