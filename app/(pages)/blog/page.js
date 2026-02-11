import React from 'react'
import Blog from "../../Components/Home/Blog"

export async function page(){
    const data=await fetchListingData("data");
    return <Blog blogsData={data}/>
}