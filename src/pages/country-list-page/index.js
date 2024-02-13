import React, { useEffect, useState } from 'react'
import { Link, useLocation, useResolvedPath } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { info } from '../../redux/reducers/alert.slice'
import { useGetCountries } from '../../api/country'

const CountryListPage = () => {

 const [countries, setCountries] = useState([])
 let location = useLocation()
 const match = useResolvedPath(location.pathname)
 const dispatch = useDispatch()

 const {data, isLoading} = useGetCountries()

 useEffect(() => {
  if (data && data?.length) {
   dispatch(info('Countries fetched successfully!'))
   setCountries(data)
  }
 }, [data, isLoading, dispatch])

 return (
  <div className="m-2 bg-white rounded-lg shadow w-full flex flex-wrap justify-center -mx-3">
   {isLoading ?
    new Array(9).fill(0).map((val, index) => (
     <div key={val + index}
          className="m-2 p-3 w-full md:w-1/3 lg:w-1/4 hover:bg-blue-600 hover:text-blue-200 h-64 w-64 border-2 border-slate-500">
      <div className="block m-2 text-center text-xl hover:text-2xl antialiased font-medium">
       <span className="sr-only">Loading...</span>
       <svg className="block h-24 w-24 m-2 mx-auto text-gray-200 dark:text-gray-600" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 18">
        <path
         d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
       </svg>
      </div>
     </div>))
    : countries && countries.map((country) => (
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
