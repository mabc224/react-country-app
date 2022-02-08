import React, { useContext, useState, useEffect } from 'react'
import { CountryContext } from '../../../contexts'

const CountryPageCurrencyTab = () => {
 const country = useContext(CountryContext)

 const [currencies, setCurrencies] = useState({})

 useEffect(() => {
  if (country?.currencies) {
   setCurrencies(country?.currencies)
  }
 }, [country])

 return (
  <div className="flex flex-col">
   <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
       <thead className="bg-gray-50">
       <tr>
        <th
         scope="col"
         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
         Name
        </th>
        <th
         scope="col"
         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
         Symbol
        </th>
        <th
         scope="col"
         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
         Abbreviation
        </th>
       </tr>
       </thead>
       <tbody className="bg-white divide-y divide-gray-200">
       {Object.entries(currencies).map(([key, value]) => (
        <tr key={key}>
         <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{value?.name}</div>
         </td>
         <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{value?.symbol}</div>
         </td>
         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{key}</td>
        </tr>
       ))}
       </tbody>
      </table>
     </div>
    </div>
   </div>
  </div>
 )
}

export default CountryPageCurrencyTab
