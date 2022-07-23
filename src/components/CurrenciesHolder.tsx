import React from 'react';
import shardsImg from "../images/shards.png"
import engramPng from "../images/engram.jpg"
import engramSelectPng from "../images/selectedengram.jpg"


export default function CurrenciesHolder() {
  return (
    <div className = "currenciesContainer">
        <div className = "currency">
            <h2>999</h2>
        </div>
        <img alt = "shards logo "className = "currencyImg" src = {shardsImg}></img>

        <div className = "currency">
            <h2>999</h2>
        </div>
        <img alt = "glimmer logo" className = "currencyImg" src = {shardsImg}></img>

        <div className = "engramHolder">
        <img alt = "engram logo" className = "engramImg" src = {engramPng} onMouseOver = {e => e.currentTarget.src = engramSelectPng} onMouseOut = {e =>e.currentTarget.src = engramPng }></img>
        <h3>Decode new gear</h3>
        </div>
        
        
    </div>
  )
}
