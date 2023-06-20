import React from 'react'
import HallCard from './HallCard'
import "./style.css"
import Data from './Data'
import HeadTitle from '../../../Common/HeadTitle/HeadTitle'

const Hall = () => {
  return (
    <>
      <HeadTitle />


      <section className='gallery top'>
        <div className='container grid'>
          {Data.map((value) => {
            return <HallCard images={value.image} title={value.title} />
          })}
        </div>
      </section>

    </>
  )
}

export default Hall
