import { useState, useEffect } from 'react'

//Importer le composant
import paginate from './utils'
//API github endpoint
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

//La fonction useFetch()
export const useFetch = () => {
    //Etat initial
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  //Récupération de données depuis l'API github
  const getProducts = async () => {
    const response = await fetch(url)
    //conversion de données recues en json
    const data = await response.json()
    //Mag d'Etat de data
    setData(paginate(data))
     //Mag d'Etat de loading
    setLoading(false)
  }
  //UseEffect pour exécuter la fonc getProducts() une fois 
  useEffect(() => {
    getProducts()
  }, [])

  return { loading, data }
}