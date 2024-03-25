import Breadcrumbs from "../components/Breadcrumbs";

export default function AboutPage(){
  return <>
    <h1>About</h1>
    <Breadcrumbs links={[{link:'', name:'About'}]} />
  </>
}