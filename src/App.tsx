import React from "react"
import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"
import Jumbo from "./components/Jumbotron"
import Welcome from "./components/Welcome"
import TCS from "./components/TCS"
import Fixed from "./components/FixedBack"
import Hidden from "./components/Hidden"
import Cards from "./components/Cards"
import TCS2 from "./components/TCS2"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

export default (): JSX.Element => {
    return (
        <>
            <Navigation/>
            <Carousel/>
            <Jumbo/>
            <Welcome/>
            <TCS/>
            <Fixed/>
            <Hidden/>
            <Cards/>
            <TCS2/>
        </>
    )
}