import { useQuery } from '@tanstack/react-query'
import { makeApiCall } from './utils'

async function getCountries () {
 try {
  const {data} = await makeApiCall('GET', 'all')
  return data
 } catch (error) {
  console.error(error)
  throw new Error('Error to fetch countries')
 }
}

async function getCountry (name) {
 try {
  const {data} = await makeApiCall('GET', `alpha/${name}`)
  return data
 } catch (error) {
  console.error(error)
  throw new Error(`Error to fetch ${name} country`)
 }
}

export const useGetCountries = () => {
 return useQuery({
  queryKey: ['countries'],
  queryFn: getCountries,
 })
}

export const useGetCountry = (name) => {
 return useQuery({
  queryKey: ['country', name],
  queryFn: async () => getCountry(name),
  enabled: !!name,
 })
}
