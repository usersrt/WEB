import React from 'react'
import { Link } from 'react-router-dom'
import s from './Error.module.scss'

const Error = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.box}>
          <p className={s.Error__text}>Произошла <span className={s.Error__span2}>ошибка</span> </p>
          <p className={s.Error__text}>Советуем вернутся на главную страницу</p>
          <Link to='/'><span className={s.Error__span}>Home</span></Link>
        </div>
      </div>
    </>
  )
}

export default Error