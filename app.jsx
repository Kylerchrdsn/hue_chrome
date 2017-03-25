import React from 'react'
import { render } from 'react-dom'
import styles from './app.css'

const app = document.getElementById('app')

render(
  <div>
    <div className="status"></div>
    <img id="image-result" hidden />
  </div>,
app)
