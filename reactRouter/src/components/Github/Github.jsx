import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const gitdata = useLoaderData()

    // const [gitdata,setGitData] = useState([]);

    // useEffect(()=>{
    //     fetch("https:/api.github.com/users/gauravsomdattakulkarni")
    //     .then(response => response.json())
    //     .then(gitdata=>{
    //         console.log(gitdata)
    //         console.log(gitdata.followers)
    //         setGitData(gitdata)
    //     })
    // } , [])

  return (
    <div className="text-center m-4 bg-gray-500 p-4 text-white text-3xl">
        <center>
            <img className="p-4" src={gitdata.avatar_url}/>
        </center>
        Github Followers : {gitdata.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await(fetch("https:/api.github.com/users/gauravsomdattakulkarni"))
    return response.json()
}