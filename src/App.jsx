import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Cuisine } from "./pages/Cuisine"
import { Catagories } from "./pages/Catagories"
import { Header } from "./pages/Header"
import { SearchedComponent } from "./pages/SearchedComponent"
import { SingleRecipe } from "./pages/SingleRecipe"
function App() {
  return (
    <>
    <Header />
      <Catagories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:id" element={<SearchedComponent />} />
        <Route path="/cuisine/:country" element={<Cuisine />} />
        <Route path="/recipe/:name" element={<SingleRecipe />} />
      </Routes>
    </>
  )
}

export default App
