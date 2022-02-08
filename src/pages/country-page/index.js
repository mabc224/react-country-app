import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate, useParams, useLocation, useMatch } from 'react-router-dom'

import CountryPageInfoTab from './country-page-info-tab'
import CountryPageCurrencyTab from './country-page-currency-tab'
import CountryPageLanguageTab from './country-page-language-tab'
import { getCountry } from '../../api/country'
import { CountryContext } from '../../contexts'
import Tabs from '../../components/common/core/tabs'

const tabs = [
 {label: 'Info', value: 'info', path: 'info'},
 {label: 'Currency', value: 'currency', path: 'currency'},
 {label: 'Language', value: 'language', path: 'language'},
]

const CountryPage = () => {
 let {name} = useParams()
 let location = useLocation()
 const [country, setCountry] = useState({})

 const splitLocationPath = location.pathname.split('/')
 const mainPath = splitLocationPath[1]

 useEffect(() => {
  async function fetchCountry () {
   let {data} = await getCountry(name)
   setCountry(data[0])
  }

  fetchCountry()
 }, [])

 return (
  <CountryContext.Provider value={country || {}}>

   <div className="h-full flex flex-col w-full bg-gray-100">
    <div className="">
     <Tabs matchUrl={`/${mainPath}/${name}/`} items={tabs}/>
    </div>
    <div className="bg-gray-100 h-full px-4 py-4">
     <Routes>
      <Route path="*">
       <Route exact path="info" element={<CountryPageInfoTab/>}/>
       <Route exact path="currency" element={<CountryPageCurrencyTab/>}/>
       <Route exact path="language" element={<CountryPageLanguageTab/>}/>
       <Route path="*" element={<Navigate to={`info`}/>}/>
      </Route>
     </Routes>
    </div>
   </div>
  </CountryContext.Provider>
 )
}

export default CountryPage
