import React from 'react'
import BeautyCard from './BeautyCard'
import Data from './Data'
import "./style.css"
import HeadTitle from '../../../Common/HeadTitle/HeadTitle'

const Beauty = () => {
  return (
    <>
    <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
          {Data.map((value) => {
            return <BeautyCard images={value.image} title={value.title} />
          })}
        </div>
      </section>

    </>
  )
}

export default Beauty
