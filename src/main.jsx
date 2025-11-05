import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import WholeTeam from './pages/WholeTeam'
import Gary from './pages/Gary'
import Project from './pages/Project'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

function Root(){
  return <h1>I am the root</h1>
}

function Bork(){
  return <h1>Hello bork</h1>;
}

const router = createBrowserRouter([
  {path: "/", Component: Home},
  {path: "/about", Component: About },
  { path: "/team", 
    Component: Team,
    children:[
      { index: true, Component: WholeTeam },
      { path: "gary", Component: Gary },
    ]
  },
  {
    path: "project/:projId",
    Component: Project,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
)
