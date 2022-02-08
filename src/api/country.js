import { makeApiCall } from './utils'

export async function getCountries () {
 return makeApiCall('GET', 'all')
}

export async function getCountry (name) {
 return makeApiCall('GET', `alpha/${name}`)
}
