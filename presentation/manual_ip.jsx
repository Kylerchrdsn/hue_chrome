import React from 'react'
import styles from './root.css'
import bStyles from './bridge_list.css'
import mStyles from './manual_ip.css'
import classnames from 'classnames'

const ManualIp = () => <div className={ classnames(styles.enterIp, bStyles.header) }>
  You can also enter your bridge IP.
  <input type="text" className={ mStyles.input } />
</div>

export default ManualIp
