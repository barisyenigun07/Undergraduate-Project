import React from 'react'
import { useQuery } from 'react-query'
import Home from "../Home/index.js";
import Card from '../../components/Card/'


const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { isLoading, error, data } = useQuery('repoData', () =>
//   fetch('localhost:4000/houses-list').then(res =>
//     res.json()
//   )
// )

// if (isLoading) return 'Loading...'
 
// if (error) return 'An error has occurred: ' + error.message

// console.log(data);

 return (
    <div>
      <Home/>
    </div>
  )
}

export default index
