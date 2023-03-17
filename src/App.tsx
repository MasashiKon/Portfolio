import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './components/root'
import './App.css'
import Home from './components/home'
import Gallery from './components/gallery'
import Project from './components/project'

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />}/>
    <Route path="gallery" element={<Gallery />}/>
    <Route path="gallery/:url" element={<Project />}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App
