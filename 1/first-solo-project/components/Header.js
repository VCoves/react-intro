import React from 'react'

export default function Header(){
    return (
        <div className="header">
            <h1 className="name">El Nano</h1>
            <h2 className="job">Piloto de F1, Bicampeón del Mundo F1</h2>
            <h3 className="ens">elnano.eth</h3>
            <nav className="nav">
                <div className="email">
                    <img src="https://svgshare.com/i/nDb.svg"/>
                    <h3>Email</h3>
                </div>
                <div className="linkedin">
                    <img src="https://svgshare.com/i/nEn.svg"/>
                    <h3>Linkedin</h3>
                </div>
            </nav>
        </div>
    )
}