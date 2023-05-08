import React, { useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/Button';
import { NavLink,useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE,SHOP_ROUTE } from '../utils/consts';
import { registration,login } from '../http/userAPI';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';


/**
* @author
* @function Auth
**/

export const Auth = observer((props) => {
    
    const {user}=useContext(Context)
    const location=useLocation();
    const history=useNavigate();
    const isLogin=location.pathname===LOGIN_ROUTE
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const click=async ()=>{
       try {
        let data;
        if(isLogin){
           data=await login(email,password);
        }else{
           data=await registration(email,password);
        }
        user.setUser(data)
        user.setIsAuth(true)
        history(SHOP_ROUTE)
       } catch (e) {
        alert(e.response.data.message)
       }
    }

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
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    type="email"
                />
                 <Form.Control
                    className="mt-3"
                    placeholder='Введите пароль'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    type='password'
                />
                <Form className="d-flex justify-content-between">
                {isLogin ?
                 <div className="mt-4">Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></div>
                 :
                 <div className="mt-4">Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                }
                <Button variant={"outline-dark"} onClick={click} className="mt-3 align-self-end">
                    {isLogin? "Войти" : "Зарегистрироваться"}
                </Button>
                </Form>
            </Form>
        </Card>
        
    </Container>
   )

 })