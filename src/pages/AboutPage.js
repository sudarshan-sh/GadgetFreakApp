import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Gadgets have become increasingly important in the digital world as
            technology continues to advance at a rapid pace. Here are some
            examples of gadgets that are commonly used in the digital world.
            Many gadgets are also designed with connectivity in mind, allowing
            them to connect to the internet or other devices to share
            information, control smart home devices, or communicate with other
            people through messaging or social media apps. Overall, gadgets are
            designed to make our lives easier, more efficient, and more
            enjoyable, by providing us with a wide range of features and
            functions in a single, portable device.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
