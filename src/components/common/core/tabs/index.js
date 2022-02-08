import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Tabs = ({items, matchUrl}) => {
 const {pathname} = useLocation()
 const classLink = '"whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-white hover:text-gray-100 hover:border-gray-100'
 const classLinkActive = 'whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-white font-medium text-sm leading-5 text-white'
 const isHighlight = (menu) => pathname.indexOf(menu) >= 0

 return (
  <div className="block overflow-x-auto">
   <div className="border-b w-full">
    <nav className="-mb-px flex bg-slate-400">
     {
      items.map((item, index) => (
       <Link key={index}
             className={`${item?.hidden ? 'hidden' : ''} ${isHighlight(item.value) ? classLinkActive : classLink}`}
             to={matchUrl + item.path}>{item.label}</Link>
      ))
     }
    </nav>
   </div>
  </div>
 )
}

Tabs.defaultProps = {
 items: []
}

export default Tabs
