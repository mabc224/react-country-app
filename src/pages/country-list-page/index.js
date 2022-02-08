import React, { useEffect, useState } from 'react'
import { Link, useLocation, useResolvedPath } from 'react-router-dom'

import { getCountries } from '../../api/country'

const CountryListPage = () => {

 const [countries, setCountries] = useState([])
 let location = useLocation()
 const match = useResolvedPath(location.pathname)

 useEffect(() => {

  async function fetchCountries () {
   let response = await getCountries()
   setCountries(response.data)
  }

  fetchCountries()
 }, [])

 return (
  <div className="m-2 bg-white rounded-lg shadow w-full flex flex-wrap justify-center -mx-3">
   {countries.map((country) => (
    <div key={country?.cca3}
         className="m-2 p-3 w-full md:w-1/3 lg:w-1/4 hover:bg-blue-600 hover:text-blue-200 h-64 w-64 border-2 border-slate-500">
     <Link
      className="block m-2 text-center text-xl hover:text-2xl antialiased font-medium"
      to={`${match.pathname}/${country?.cca3}`}
      key={country.name.common}
     >
      {country.name.official}

      <img
       className="block h-24 w-24 m-2 mx-auto"
       src={country?.flags?.svg}
       alt="countries app"
      />
     </Link>
    </div>
   ))}
  </div>
 )
}

export default CountryListPage
