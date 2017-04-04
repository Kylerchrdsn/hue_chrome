/* React and helpers */
import React, { Component } from 'react'
import update from 'react-addons-update'
/* Styles */
import styles from 'presentation/root.scss'
/* Pages */
import FindBridge from 'pages/find_bridge.jsx'
/* Components */
import Header from 'presentation/header.jsx'
import Main from 'presentation/layout/main.jsx'


export default class Root extends Component {
  //========================
  constructor() {
    super()

    const hueNupnp = 'https://www.meethue.com/api/nupnp'
    this.state = {
      bridges: [],
      page: 'findBridge'
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
    let page = null
    switch (this.state.bridge) {
      case 'findBridge':
        page = <FindBridge bridges={ this.state.bridges } />
      default:
        page = <FindBridge bridges={ this.state.bridges } />
    }

    return <div className={ styles.wrapper }>
      <Header />
      <Main>
        { page }
      </Main>
    </div>
  }
}
