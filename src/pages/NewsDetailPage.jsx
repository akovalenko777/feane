import { Link, useParams } from "react-router-dom"
import { decode } from "js-base64";
import { useEffect, useState } from "react";
import md5 from "md5";
import './../assets/css/news.scss'
import { toast } from "react-toastify";
import Share from "../components/Share";

export default function NewsDetailPage(){
  const params = useParams()
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  // console.log(encodeURL(decode(params.slug)));
  console.log(encodeURIComponent(decode(params.slug)));

  async function fetchNewsDetail(){
    const storedKey = `news_${md5(params.slug)}`
    const storedNews = localStorage.getItem(storedKey)
    if(storedNews){
      setData(JSON.parse(storedNews))
      return
    }
    setLoading(true)
    try {
      const url = encodeURIComponent(decode(params.slug))
      const resp = await fetch(`${import.meta.env.VITE_WN_API_URL}extract-news?analyze=true&url=${url}&api-key=${import.meta.env.VITE_WN_API_KEY}`)
      const json = await resp.json()
      setData(json)
      localStorage.setItem(storedKey, JSON.stringify(json))
      setLoading(false)
    } catch(err){
      toast.error('Something wrong. Try again')
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    if(isLoading)
      return
    fetchNewsDetail()
  }, [])


  return <>
    {isLoading && <div className="loader"><span></span></div>}
      <section className="layout_padding">
        <div className="container">
        {data && (
          <>
            <h1>{data.title}</h1>
            <img src={data.image} alt={data.title} />
            <div className="content">
              {data.text}
            </div>
            <Share title={data.title} image={data.image} description={data.text} />
          </>
        )}
        <Link to="/news">All News</Link>
        
        </div>
      </section>
  </>
}