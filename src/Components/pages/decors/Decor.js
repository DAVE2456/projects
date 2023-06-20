import React from 'react'
import DecorCard from './DecorCard'
import Data from './Data'
import "./style.css"
import HeadTitle from '../../../Common/HeadTitle/HeadTitle'

const Decor = () => {
  return (
    <>
    <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
          {Data.map((value) => {
            return <DecorCard images={value.image} title={value.title} />
          })}
        </div>
      </section>

    </>
  )
}

export default Decor
