import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import WholeTeam from './pages/WholeTeam'
import Gary from './pages/Gary'
import Project from './pages/Project'
//
import NameForm from './pages/nameForm'
import Thanks from './pages/Thanks'
//
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

function Root(){
  return <h1>I am the root</h1>
}

function Bork(){
  return <h1>Hello bork</h1>;
}

//
//<Route index element={<NameForm handleSalutationChange={(e)=>handleSalutationChange(e)} handleNameChange={(e)=>handleNameChange(e)}/>} />
//<Route path="thanks" element={<Thanks salutation={salutation} namer={namer}/>} />
const router = createBrowserRouter([
  {path: "/", Component: Home},
  {path: "/about", Component: About },
  { path: "/team", 
    Component: Team,
    children:[
      { index: true, Component: WholeTeam },
      { path: "gary", Component: Gary },
      { path: "formEx", Component: NameForm},
      { path: "thanks", Component: Thanks }
    ]
  },
  {
    path: "project/:projId",
    Component: Project,
  },
  {
    path: "*",
    Component: Root
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
)
