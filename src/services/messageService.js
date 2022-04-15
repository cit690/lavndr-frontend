import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/messages/`

export const getAll = async () => {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const getOne = async (id) => {
  console.log("get one msg service")
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const create = async (message) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(message),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}
