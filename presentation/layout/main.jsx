import React from 'react'
import styles from 'presentation/layout/main.scss'

const Main = ({ children }) => <main className={ styles.main }>
  { children }
</main>

export default Main
