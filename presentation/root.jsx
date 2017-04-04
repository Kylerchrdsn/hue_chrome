/* React and helpers */
import React, { Component } from 'react'
import update from 'react-addons-update'
/* Styles */
import styles from './root.css'
import bStyles from './bridge_list.css'
/* Components */
import Header from './header.jsx'
import BridgeList from './bridge_list.jsx'
import ManualIp from './manual_ip.jsx'


export default class Root extends Component {
  //========================
  constructor() {
    super()

    const hueNupnp = 'https://www.meethue.com/api/nupnp'
    this.state = {
      bridges: []
    }

    fetch(hueNupnp).then((resp) => {
      resp.json().then((json) => {
        this.setState(update(this.state, {
          bridges: { $set: json }
        }))
      })
    })
  }

  //========================
  render() {
    return <div className={ styles.wrapper }>
      <Header />
      <main className={ styles.main }>
        <BridgeList bridges={ this.state.bridges } />
        <ManualIp />
      </main>
    </div>
  }
}
