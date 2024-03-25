import Breadcrumbs from "../components/Breadcrumbs";

export default function MenuPage(){
  return <>
    <h1>Menu</h1>
    <Breadcrumbs links={[{link: '', name: 'Menu'}]} />
  </>
}