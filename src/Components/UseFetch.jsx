import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    //Use state variable to store the data
    const [data,setData] =useState();
//Use useEffect to fetch data from the url
    useEffect(() =>{
        fetch(url).then((res)=>res.json())
        .then((data) => setData(data))
    },[])
    return [data]
}

export default useFetch
