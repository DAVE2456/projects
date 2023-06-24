import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import Studio from "./Components/pages/studio/Studios"
import Beauty from "./Components/pages/beauty/Beauty"
import Decor from "./Components/pages/decors/Decor"
import Hall from "./Components/pages/hall/Hall"
import Car from "./Components/pages/cars/Car"
import Food from "./Components/pages/foods/Food"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/studio' exact component={Studio} />
          <Route path='/beauty' exact component={Beauty} />
          <Route path='/decor' exact component={Decor} />
          <Route path='/hall' component={Hall} />
          <Route path='/car' component={Car} />
          <Route path='/food' component={Food} />
          <Route path='/sign-in' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App