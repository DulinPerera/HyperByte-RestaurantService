import { BrowserRouter,Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import Form from "./components/Form"

export default function App() {
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>

    </BrowserRouter>
  )
}
