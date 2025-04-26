import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateSupabaseClient } from './utils/supabase/supabase'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)
  const supabase = CreateSupabaseClient();
  async function addrow(){
    const { data, error } = await supabase.from('recipes').insert({name: 'chicken', ingredients: ["lemon pepper", "Yosh", "water"], time: 1.20 })
    console.log(data);
    console.log(error)
  }

  return (
    <div>
      <button onClick={addrow}>Add Row</button>
    </div>
  )
}

export default Home
