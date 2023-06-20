import React from "react"
import "../../App.css"
import "../HomeSection/Home.css"
import Hero from "../HomeSection/Hero"
import Studios from "./studio/Studios"
import Beauty from "./beauty/Beauty"
import Decor from "./decors/Decor"
import Hall from "./hall/Hall"
import Car from "./cars/Car"
import Food from "./foods/Food"
import Slider from "react-slick"


const Home = () => {
  return (
    <>
      
      <Hero />
      <Slider />
      <Studios />
      <Beauty />
      <Decor />
      <Hall />
      <Car />
      <Food />
    
    </>
  )
}

export default Home
