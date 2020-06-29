import React from "react"
import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"
import Jumbo from "./components/Jumbotron"
import Welcome from "./components/Welcome"


export default (): JSX.Element => {
    return (
        <>
            <Navigation/>
            <Carousel/>
            <Jumbo/>
            <Welcome/>
        </>
    )
}