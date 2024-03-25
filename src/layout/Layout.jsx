import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useRef } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Layout(){
  const location = useLocation()

  const bodyRef = useRef(document.body)
  bodyRef.current.className = location.pathname!=='/' ? 'sub_page' : ''

  return <>
    <SiteHeader />
    <Breadcrumbs />
    <Outlet />
    <SiteFooter />
  </>
}