import React from 'react'
import BridgeList from 'presentation/find_bridge/bridge_list.jsx'
import ManualIp from 'presentation/find_bridge/manual_ip.jsx'

const FindBridge = ({ bridges }) => <div>
   <BridgeList bridges={ bridges } />
   <ManualIp />
</div>

export default FindBridge
