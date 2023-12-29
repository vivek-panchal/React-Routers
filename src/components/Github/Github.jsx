import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/vivek-panchal')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Name: {data.name}
    <div className='text-center m-4 bg-gray-600 text-white  text-3xl'>Github followers: {data.followers}</div>
    <div className='text-center m-4 bg-gray-600 text-white  text-3xl'>Repository: {data.public_repos}</div>
    <img className='rounded-lg' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vivek-panchal')
    return response.json()
}