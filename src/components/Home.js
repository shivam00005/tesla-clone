import React from 'react'
import styled from 'styled-components'
import Section from './Section'



function Home() {
    return (
        <Container>
            <Section
                tittle="Model S"
                description="This Website Build For Eduction Purpose"
                backgroundImage="model-s.jpg"
                leftButtonText="Custom order"
                rightButtonText="exsisting inventory"
            />
            <Section
                tittle="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftButtonText="Custom order"
                rightButtonText="exsisting inventory"
            />
            <Section
                tittle="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftButtonText="Custom order"
                rightButtonText="exsisting inventory"
            />
            <Section
                tittle="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-X.jpg"
                leftButtonText="Custom order"
                rightButtonText="exsisting inventory"
            />
            <Section
                tittle="Lowest Cost Solar Panels in America"
                description="Money-back guaranted"
                backgroundImage="Solar-panel.jpg"
                leftButtonText="Order now"
                rightButtonText="learn more"
            />
            <Section
                tittle="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImage="solar-roof.jpg"
                leftButtonText="Order now"
                rightButtonText="exsisting inventory"
            />
            <Section
                tittle="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftButtonText="Shop now"

            />

        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
`
