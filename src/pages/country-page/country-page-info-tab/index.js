import React, { useContext } from 'react'
import { CountryContext } from '../../../contexts'

const CountryPageInfoTab = () => {
 const country = useContext(CountryContext)

 return (
  <div className="flex flex-col">
   <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
       <tbody className="bg-white divide-y divide-gray-200">
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Official Name</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.name?.official}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Common Name</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.name?.common}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Independent</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.independent ? 'Yes' : 'No'}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Flag</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">
          <img
           className="h-24 w-24"
           src={country?.flags?.svg}
           alt="countries app"
          />
         </div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Population</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.population}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Capital</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.capital?.join(', ')}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Timezones</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.timezones?.join(', ')}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Region</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.region}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">Subregion</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.subregion}</div>
        </td>
       </tr>
       <tr>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">TLD</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
         <div className="text-sm text-gray-900">{country?.tld?.join(', ')}</div>
        </td>
       </tr>
       </tbody>
      </table>
     </div>
     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
       <caption className="bg-gray-50 my-5 p-5 text-4xl">Other Native Names</caption>
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
       {country?.name?.nativeName && Object.entries(country?.name?.nativeName).map(([key, value]) => (
        <tr key={key}>
         <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{value?.official}</div>
         </td>
         <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{value?.common}</div>
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

export default CountryPageInfoTab
