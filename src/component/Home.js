import React from 'react';
import styled from 'styled-components'
import Section from './Section.js'

function Home() {
  const dataItems = [
    {
      title:"Model S",
      description:"Order Online for Touchless Delivery",
      backgroundImg:"model-s.jpg",
      leftBtnText:"Custom Order",
      rightBtnText:"Existing Inventory"
    },
    {
      title:"Model Y",
      description:"Order Online for Touchless Delivery",
      backgroundImg:"model-y.jpg",
      leftBtnText:"Custom Order",
      rightBtnText:"Existing Inventory"
    },
    {
      title:"Model 3",
      description:"Order Online for Touchless Delivery",
      backgroundImg:"model-3.jpg",
      leftBtnText:"Custom Order",
      rightBtnText:"Existing Inventory"
    },
    {
      title:"Model X",
      description:"Order Online for Touchless Delivery",
      backgroundImg:"model-x.jpg",
      leftBtnText:"Custom Order",
      rightBtnText:"Existing Inventory"
    },
    {
      title:"Lowest Cost Solar Panels in America",
      description:"Money-back guarantee",
      backgroundImg:"solar-panel.jpg",
      leftBtnText:"Order now",
      rightBtnText:"Learn more"
    },
    {
      title:"Solar for New Roofs",
      description:"Solar Roof Costs Less Than a New Roof",
      backgroundImg:"solar-roof.jpg",
      leftBtnText:"Order now",
      rightBtnText:"Learn more"
    },
    {
      title:"Accessories",
      description:"",
      backgroundImg:"accessories.jpg",
      leftBtnText:"Shop now",
      rightBtnText: null
    },
  ];
  const listItems = dataItems.map((dataItem, index) =>
    <Section key={index}
      title={ dataItem.title }
      description={ dataItem.description }
      backgroundImg={ dataItem.backgroundImg }
      leftBtnText={ dataItem.leftBtnText }
      rightBtnText={ dataItem.rightBtnText }
    />
  );

  return (
    <Container>
      {listItems}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 1;
`
