import { createHashRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import BookTablePage from "./pages/BookTablePage";

export const routesList = [
  {
    path: '/',
    name: 'Home',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'menu',
        name: 'Our Menu',
        Component: MenuPage
      },
      {
        path: 'about',
        name: 'About Us',
        children: [
          {
            index: true,
            Component: AboutPage
          },
          {
            path: 'team',
            name: 'Our Team',
            Component: TeamPage
          },{
            path: 'lvl-2',
            name: 'Level 2',
            children: [
              {
                index: true,
                Component: TeamPage
              },
              {
                path: 'lvl-3',
                name: 'Level 3',
                Component: TeamPage
              }
            ]
          }
        ]
      },
      {
        path: 'book-table',
        name: 'Book Table',
        Component: BookTablePage
      },
      {
        path: 'news',
        name: 'News',
        children: [
          {
            index: true,
            Component: NewsPage
          },
          {
            path: ':slug',
            name: 'News Detail',
            Component: NewsDetailPage
          }
        ]
      }
    ]
  }
]

export default createHashRouter(routesList)