import React from 'react'
import Wrapper from 'presentation/layout/wrapper.jsx'
import BridgeList from 'presentation/find_bridge/bridge_list.jsx'
import ManualIp from 'presentation/find_bridge/manual_ip.jsx'

const FindBridge = ({ bridges }) => <Wrapper>
   <BridgeList bridges={ bridges } />
   <ManualIp />
</Wrapper>

export default FindBridge
