import React from 'react'

const subClassStyle = {
    border: "2px solid white",
    transform: "rotate(45deg)",
    width:"90px",
    height: "90px",
    marginLeft:"3px",
    marginBottom:"50px"
}

export default function SubClassHolder() {
  return (
    <div style = {subClassStyle}></div>
  )
}
