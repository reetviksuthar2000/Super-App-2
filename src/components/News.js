import React from "react";
import styledas from "../pages/Dashboardpage/Dashboard.module.css";
import { useState, useEffect } from "react";


function News() {
  const [news, setNews] = useState([]);

  const fetchNewsData = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&pageSize=1&apiKey=2924592980e54679ba2384749c2dfbee";
    let data = await fetch(url);
    let parsedData = await data.json();
    setNews(parsedData.articles);
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  // console.log(news);

  return (
    <>
      {news?.map((subitem) => {
         return(<div className={styledas.right} key={subitem.id}>
        
        
         <div className={styledas.news} >
         
          
           <div className={styledas.transbac} key={subitem.id}>
              <img src={subitem.urlToImage} alt="" />
              <div className={styledas.light} >
                <p className={styledas.para}>{subitem.title}</p>
                <p className={styledas.time}>{subitem.publishedAt}</p>
              </div>
            </div>
            <div className={styledas.description} >
              <p className={styledas.des}>
                {subitem.description}
              </p>
            </div>
            
            
          </div>
          
          
           
        </div>
     )})}
    </>
  );
}

export default News;
