import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function App(){
    return (
        <div className="app">
            <img className="profile-pic"/>  
            <Header/>
            <Content />
            <Footer />
        </div>
    )
}