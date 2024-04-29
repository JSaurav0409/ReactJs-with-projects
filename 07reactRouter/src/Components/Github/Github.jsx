import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData()
//     const [data, setData] = useState([])
//     useEffect(() => { 
//         fetch('https://api.github.com/users/JSaurav0409')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 setData(data)
//             })
//     }
// , [])
    
        
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-3 text-3xl'>
          Github Followers : {data.followers}
          <img src={data.avatar_url} alt="Git picture" width="200" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/JSaurav0409')
  return response.json()
}
