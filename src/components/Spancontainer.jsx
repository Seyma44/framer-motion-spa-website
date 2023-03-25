import React from 'react';
import styled from "styled-components";
import loadmore from "assets/loadmore.png";
function Spancontainer() {

  return (
    <Section>
      <div className="span-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
      </div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 10vh;
  height: 20vh;
  background-color: var(--secondary-color);
.span-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0;
  span {
    margin:1rem 0;
    color: #fff;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
}
`
export default Spancontainer