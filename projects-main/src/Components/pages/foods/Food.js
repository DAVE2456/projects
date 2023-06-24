import React from 'react'
import FoodCard from './FoodCard'
import "./style.css"
import Data from './Data'
import HeadTitle from '../../../Common/HeadTitle/HeadTitle'

const Food = () => {
  return (
    <>

    <HeadTitle />
      <section className='gallery top'>
        <div className='container grid'>
          {Data.map((value) => {
            return <FoodCard images={value.image} title={value.title} />
          })}
        </div>
      </section>

    </>
  )
}

export default Food
