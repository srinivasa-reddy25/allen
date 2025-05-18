import './index.css'

import TopBar from '../components/TopBar/topbar'
import LastPart from '../components/LastPart/lastpart'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <TopBar />
        <Outlet />
        <LastPart />
    </div>
  )
}

export default Layout