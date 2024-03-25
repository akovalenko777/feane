import { Link, useLocation } from "react-router-dom";
import { routesList } from "../router";

export default function Breadcrumbs(){
  const location = useLocation()
  const arPath = location.pathname.split('/')
  arPath.shift()

  const links = [
    {
      link: '/',
      name: 'Home'
    }
  ]

  function findName(path, routes, name=''){
    for(let i=0;i<routes.length;i++){
      if(routes[i].path && routes[i].path===path){
        name = routes[i].name
      }
      if(routes[i].children){
        name = findName(path, routes[i].children, name)
      }
    }
    return name
  }

  const currentPath = ['']
  arPath.forEach((item, index) => {
    if(item){
      currentPath.push(item)
      let link = arPath.length-1 === index ? '' : currentPath.join('/')
      const name = findName(item, routesList[0].children)
      links.push({
        link,
        name
      })
    }
  })
  
  if (links.length===1){
    return <></>
  }

  return (
    <ul className="breadcrumbs">
      {links.map((item, index) => {
        if(item.link){
          return <li key={index}><Link to={item.link}>{item.name}</Link></li>
        }
        return <li key={index}><span>{item.name}</span></li>
      })}
    </ul>
  )
}