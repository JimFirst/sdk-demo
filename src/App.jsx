import { Test } from './components/Test.jsx'
import style from './app.module.css'
import React from 'react'

export default function App() {
  return (
    <div>
      <button className={style.button}>联系我</button>
      <Test name="dddd" />
    </div>
  )
}
