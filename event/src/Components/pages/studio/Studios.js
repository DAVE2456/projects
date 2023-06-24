import React from "react"
import StudioCard from './StudioCard'
import "./style.css"
import Data from './Data'
import HeadTitle from "../../../Common/HeadTitle/HeadTitle"

const Studios = () => {
  return (
    <>
    
      <HeadTitle />


      <section className='gallery top'>
        <div className='container grid'>
          {Data.map((value) => {
            return <StudioCard images={value.image} title={value.title} />
          })}
        </div>
      </section>

      
    </>
  )
}

export default Studios
