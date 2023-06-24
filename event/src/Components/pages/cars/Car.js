import React from 'react'
import CarCard from './CarCard'
import Data from './Data'
import "./style.css"
import HeadTitle from '../../../Common/HeadTitle/HeadTitle'

const Car = () => {
  return (
    <>
    <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
          {Data.map((value) => {
            return <CarCard images={value.image} title={value.title} />
          })}
        </div>
      </section>

    </>
  )
}

export default Car
