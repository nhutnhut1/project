import React, { useEffect, useState } from 'react'
import "./sitemap.scss"
const SiteMap = () => {
    const [path, setPath] = useState(window.location.pathname)
    useEffect(() => {
        setPath(window.location.pathname)
        return () => {
            setPath("")
        }
    })

  return (
    <div className='app__sitemap'>{"Thông tin người dùng"}</div>
  )
}

export default SiteMap