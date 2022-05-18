import React from 'react'
import { useNavigate } from 'react-router'
import Dashboard from '../../assets/Dashboard'
import Device from '../../assets/Device'
import LogoSm from '../../assets/LogoSm'
import NumberProvider from '../../assets/NumberProvider'
import Report from '../../assets/Report'
import Service from '../../assets/Service'
import SystemSetting from '../../assets/SystemSetting'
import "./sidebar.scss"

const items = [{ name: "Dashboard", icon: <Dashboard />, path: "panel" }, { name: "Thiết bị", icon: <Device />, path: "device" }, { name: "Dịch vụ", icon: <Service /> }, { name: "Cấp số", icon: <NumberProvider /> }, { name: "Báo cáo", icon: <Report /> }, { name: "Cài đặt hệ thống", icon: <SystemSetting /> }]
const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='app__sidebar'>
            <div className="app__sidebar__logo">
                <LogoSm />
            </div>
            <div className="app__sidebar__items-container">
                {items.map(item => {
                    return <div className="menu-item" key={item.name} onClick={() => navigate(`${item.path ? item.path : ``}`)}>
                        <div className="menu-item__icon">
                            {item.icon}
                        </div>
                        <div className="menu-item__name">
                            {item.name}

                        </div>
                    </div>
                })}
            </div>
            <div className="app__sidebar__sign-out">
                <button onClick={() => navigate("/login")}>Đăng xuất</button>
            </div>
        </div>
    )
}
//beo bam alt shift f =>>> alo ?bam r ma bam lai r day co thay gi dau

export default Sidebar