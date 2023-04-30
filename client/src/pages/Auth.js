import React from 'react'
import "../styles/regcard.css"


/**
* @author
* @function Auth
**/

export const Auth  = (props) => {
  return(

      <div className='card'>
        <h2>Авторизация</h2>
        <div className='card_form'>
          <input type='mail' className='mail' placeholder="Введите е-mail"></input>
          <input type='password' className='pass' placeholder="Введите пароль"></input>
        </div>
        <div className='buttons'>
          <div>Нет аккаунта? Зарегистрируйтесь!</div>
          <button>Войти</button>
        </div>
      </div>

   )

 }