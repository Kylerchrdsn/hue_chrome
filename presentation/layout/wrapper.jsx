import React from 'react'
import styles from 'presentation/layout/wrapper.scss'

const Wrapper = ({ children }) => <div className={ styles.wrapper }>
  { children }
</div>

export default Wrapper
