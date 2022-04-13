import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles`

export const getAllProfiles = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}
// export { getAllProfiles }
