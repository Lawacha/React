import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountButton from "./Count.jsx"
import Like from "./Like.jsx"
import Comment from './comment.jsx'

function App() {
  

  return (
    <>
    <CountButton/>
    <Like></Like>
     <Comment/>
    </>
  )
}

export default App
