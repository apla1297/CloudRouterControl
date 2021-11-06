import axios from 'axios'

export const getRequest = async <T,>(url: string): Promise<T | Error> => {
  const res = await axios.get(url).catch(e => {
    return new Error(e.text)
  })

  if (!(res instanceof Error) && res.status === 200) {
    return res.data
  } else if (res instanceof Error) {
    return res
  } else {
    return new Error()
  }
}
