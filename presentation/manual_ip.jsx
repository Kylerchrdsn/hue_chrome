import React from 'react'
import bStyles from './bridge_list.scss'
import styles from './manual_ip.scss'
import classnames from 'classnames'

const ManualIp = () => <div className={ classnames(styles.enterIp, bStyles.header) }>
  You can also enter your bridge IP.
  <input type="text" className={ styles.input } />
</div>

export default ManualIp
