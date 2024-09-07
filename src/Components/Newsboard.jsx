import { useEffect, useState } from "react"
import React from "react";
import { Newstopic } from "./Newstopic";

export const Newsboard = ({category}) => {
     const [articles,setArticals] = useState([]);
     useEffect(() =>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=> setArticals(data.articles));

  }

  ,[category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">NEWS</span></h2>
      {articles.map((news,index)=>{
          return <Newstopic key={index} title={news.title} description={news.description} src={news.urlTOImage} url={news.url}/>
      }
    )}
    </div>
  )
}
