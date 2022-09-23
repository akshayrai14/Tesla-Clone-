import React from 'react';
import styled from "styled-components"
import Section from './Section'
function Home(){
  return (<>
  <Section
  title="Model S"
  description="Order Online for Contactless Delivery"
  leftBtnText="Custom Order"
  rightBtntext="Existing Inventory"
  backgroundImg="model-s.jpg"
  />
  <Section
  title="Model Y"
  description="Order Online for Contactless Delivery"
  leftBtnText="Custom Order"
  rightBtntext="Existing Inventory"
  backgroundImg="model-y.jpg"
  />
  <Section
  title="Model 3"
  description="Order Online for Contactless Delivery"
  leftBtnText="Custom Order"
  rightBtntext="Existing Inventory"
  backgroundImg="model-3.jpg"
  /><Section
  title="Model X"
  description="Order Online for Contactless Delivery"
  leftBtnText="Custom Order"
  rightBtntext="Existing Inventory"
  backgroundImg="model-x.jpg"
  /><Section
  title="Solar Panels"
  description="Low Cost Solar Panels Available"
  leftBtnText="Order Now"
  rightBtntext="Learn More"
  backgroundImg="solar_panel.jpg"
  /><Section
  title="Solar Roof"
  description="Produce Clean Energy From your Roof"
  leftBtnText="Order Now"
  rightBtntext="Learn More"
  backgroundImg="solar-roof.jpg"
  /><Section
  title="Accessories"
  description="Tesla products"
  leftBtnText="SHOP NOW"
  backgroundImg="accessories.jpg"
  />
  </>
  )
}
export default Home
