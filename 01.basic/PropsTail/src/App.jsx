import React from 'react'
import './App.css'
import Card from './Component/Card'

function App() {
  return (
    <>
      <h1 className='text-black font-bold text-6xl bg-green-400 px-3 py-2 rounded-2xl'>PropsTail</h1>
      <div className="flex items-center gap-4 py-10">
      <Card usserName="Nisha" bntText="Follow" picture={"https://images.unsplash.com/photo-1637678752610-e87437d95b19?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <Card usserName="priya" bntText="view" picture={"https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <Card usserName="prity" bntText="request" picture={"https://images.unsplash.com/photo-1614951649373-32cc2e957fdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <Card usserName="pooja" bntText="message" picture={"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      </div>
    </>
  )
}

export default App
