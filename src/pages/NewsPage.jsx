import { useState, useEffect, useRef } from "react"
import NewsItem from "../components/NewsItem"
import './../assets/css/news.scss'
import Pagination from "../components/Pagination"
import { toast } from "react-toastify"

export default function NewsPage(){
  const [newsItems, setNewsItems] = useState([])
  const [page, setPage] = useState(sessionStorage.getItem('currentPage') || '1')
  const [total, setTotal] = useState(0)
  const perPage = 12
  const isFetch = useRef(false)
  const [isLoading, setLoading] = useState(false)

  const gotoHandler = (newPage) => {
    setPage(newPage)
    sessionStorage.setItem('currentPage', newPage)
    isFetch.current = false
  }

  const fetchNews = async () => {
    const storedNews = localStorage.getItem(`newsList_${page}`)
    if(storedNews){
      setNewsItems(JSON.parse(storedNews))
      setTotal(parseInt(localStorage.getItem('totalPages') || '0'))
      return
    }
    setLoading(true)
    try {
      const offset = (page - 1) * perPage
      const resp = await fetch(`${import.meta.env.VITE_WN_API_URL}search-news?text=pizza&language=en&source-countries=us&number=${perPage}&offset=${offset}&api-key=${import.meta.env.VITE_WN_API_KEY}`)
      const json = await resp.json()

      if(json.news){
        localStorage.setItem(`newsList_${page}`, JSON.stringify(json.news))
        const totalPages = Math.ceil(json.available/json.number)
        localStorage.setItem('totalPages', totalPages)
        setNewsItems(json.news)
        setTotal(totalPages)
        
      } else {
        json.status==="failure" && toast.warning(json.message)
      }
      setLoading(false)
      // setTimeout(()=>{
      //   setLoading(false)
      // }, 2000)
    } catch (err){
      toast.error('Something wrong. Try again')
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    if(isLoading)
      return

    if(!isFetch.current){
      isFetch.current = true
      fetchNews()
    }
  }, [page])

  return <section className="food_section layout_padding">
    {isLoading && <div className="loader"><span></span></div>}
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          News 
        </h2>
      </div>
      <div className="news-content">
        <div className="grid">
          {newsItems.map(item => <NewsItem item={item} key={item.id} />)}
        </div>
        <Pagination page={page} total={total} gotoHandler={gotoHandler}/>
      </div>
    </div>
  </section>
}