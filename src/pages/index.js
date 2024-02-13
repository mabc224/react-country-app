import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryListPage from './country-list-page'
import CountryPage from './country-page'

const Pages = () => (
 <Routes>
  <Route path="*">
   <Route path=":name/*" element={<CountryPage/>}/>
   <Route index={true} element={<CountryListPage/>}/>
  </Route>
 </Routes>
)

export default Pages
