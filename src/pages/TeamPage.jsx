import Breadcrumbs
 from "../components/Breadcrumbs"
export default function TeamPage(){
  return <>
    <h1>Team</h1>
    <Breadcrumbs links={[{link:'/about', name:'About'},{link:'', name:'Team'}]} />
  </>
}