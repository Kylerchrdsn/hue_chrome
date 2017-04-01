import React from 'react'
import styles from './bridge_list.css'

const BridgeList = ({ bridges }) => <div className={ styles.bridgeList }>
  <div className={ styles.header }>You can select a bridge from list.</div>
  <ul>
    { bridges.map((b, i) =>
      <li key={ i }>{ b.internalipaddress }</li>) }
  </ul>
</div>

export default BridgeList
