import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import { CreateSupabaseClient } from './utils/supabase/supabase'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Bar from './Bar'
function App() {
  const [count, setCount] = useState(0)
  const supabase = CreateSupabaseClient();
  /*async function addrow(){
    const { data, error } = await supabase.from('recipes').insert({name: 'chicken', ingredients: ["lemon pepper", "Yosh", "water"], time: 1.20 })
    console.log(data);
    console.log(error)
  }*/

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/bar' element={<Bar />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
