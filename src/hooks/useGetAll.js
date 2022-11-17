import { useEffect, useState } from "react"
import axios from 'axios'

export const useGetAll = (endpoint) => {
    const [state, setState] = useState([])

    useEffect(() => {
      axios.get(endpoint).then(res => {
      const dados = res.data
      setState(dados)
    }).catch(err => console.log(err))

    }, [])

  return [state, setState]
}