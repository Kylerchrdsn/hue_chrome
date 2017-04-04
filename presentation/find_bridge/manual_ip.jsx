import React from 'react'
import styles from 'presentation/find_bridge/manual_ip.scss'

const ManualIp = () => <div className={ styles.wrapper }>
  <div className={ styles.enterIp }>
    You can also enter your bridge IP.
  </div>
  <div>
    <input
      type="text"
      className={ styles.input }
      placeholder="0.0.0.0" />
  </div>
  <div>
    <button type="button">SUBMIT</button>
  </div>
</div>

export default ManualIp
