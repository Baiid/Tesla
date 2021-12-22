import React from 'react'
import styled from 'styled-components'
import Section from './Section'

import modelY from '../asets/images/model-y.jpg'
import modelS from '../asets/images/model-s.jpg'
import model3 from '../asets/images/model-3.jpg'
import modelX from '../asets/images/model-x.jpg'
import solar from '../asets/images/solar-panel.jpg'
import solar2 from '../asets/images/solar-roof.jpg'
import accessories from '../asets/images/new-interior.jpg'



function Home() {
    return (
        <Container>
         
          
            <Section 
            title='Model S'
            description="Order Online for Touchless Delivery"
            backgroundImage= {modelS}
            leftBtnText='Custom order'
            rightBtnText='Existing Inventory'
                />
            <Section
                title='Model Y'
                description="Order Online for Touchless Delivery"
                backgroundImage={modelY}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
             title='Model 3'
             description="Order Online for Touchless Delivery"
             backgroundImage={model3}
             leftBtnText='Custom order'
             rightBtnText='Existing Inventory'
            
            />
            <Section 
             title='Model X'
             description="Order Online for Touchless Delivery"
             backgroundImage={modelX}
             leftBtnText='Custom order'
             rightBtnText='Existing Inventory'
            
            />

            <Section 
               title='Lowest Cost Solar Panels in America'
               description="Money-back guarantee"
               backgroundImage={solar}
               leftBtnText='Custom order'
               rightBtnText='Learn more'
            
            />
              <Section 
               title='Solar for New Roofs'
               description="Solar Roof Costs Less Than a New Roof"
               backgroundImage={solar2}
               leftBtnText='Custom order'
               rightBtnText='Learn more'
            
            />
       
       <Section 
               title='Accessories'
               description=""
               backgroundImage={accessories}
               leftBtnText='Shop now'
              
            
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;

`
