import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({ email: "", phone: "" })

  const handleclick = () => {
    alert("hey i was clicked")
  }
  const handlemouseOver = () => {
    alert("ur mouse is on the box")
  }
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click me</button>
      </div>
      <div className="purple" onMouseOver={handlemouseOver}>i am a purple box</div>
      <input type="text" name="email" value={form.email} onChange={handlechange} />
      <input type="phone" name="phone" value={form.phone} onChange={handlechange} />
      {/* <input type="text" /> */}
    </>
  )
}
export default App

