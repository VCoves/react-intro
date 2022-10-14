import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
export default function App(){
    let elements = data.map(d => {
        return <Card
            key={d.title}
            data={d}/>
        } 
    )
    return (
        <div className="app">
            <Navbar/>
            {elements}
        </div>
    )
}