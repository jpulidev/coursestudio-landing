import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SemiBold from '../assets/fonts/Graphik-Semibold.ttf';
import SEO from './SEO';

const ContainerGrid = styled.div`
  max-width: 1200px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  text-align: left;
  align-items: end;
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
`;
const HeroContainer = styled.div`
  @font-face {
    font-family: 'Cutive Semi';
    src: url(${SemiBold});
  }
  span {
    font-family: 'Cutive Semi';
    font-size: 30px;
    line-height: 38px;
  }
`;
const HeroTitle = styled.div`
  h1 {
    font-size: 170px;
    line-height: 138.55px;
  }
  .second-title {
    color: var(--green);
  }
`;
const HeroDescription = styled.div`
  max-width: 349px;

  span:first-child {
    padding-right: 9px;
    color: var(--green) !important;
  }
`;
const Description = styled.p``;
const ImageContainer = styled.div``;

function SingleName({ hero }) {
  return <h1>{hero.name}</h1>;
}
function ImageHero({ hero }) {
  return <Img fluid={hero.image.asset.fluid} />;
}
function SecondTitle({ hero }) {
  return <h1 className="second-title">{hero.secondTitle}</h1>;
}
function StrongDescription({ hero }) {
  return <span>{hero.strongTitle}</span>;
}
function NextDescription({ hero }) {
  return <span>{hero.description}</span>;
}

export default function HeroList({ hero }) {
  return (
    <>
      <SEO>
        <title>Course Studio SEO Welcome</title>
      </SEO>
      <HeroContainer>
        <ImageContainer>
          {hero.map((hero) => (
            <ImageHero key="hero-image" hero={hero} />
          ))}
        </ImageContainer>
        <ContainerGrid id="Hero-Container">
          <HeroTitle>
            {hero.map((hero) => (
              <SingleName key={hero.id} hero={hero} />
            ))}
            {hero.map((hero) => (
              <SecondTitle key={hero.secondTitle} hero={hero} />
            ))}
          </HeroTitle>
          <HeroDescription id="hero-desc">
            {hero.map((hero) => (
              <StrongDescription key={hero.strongTitle} hero={hero} />
            ))}

            {hero.map((hero) => (
              <NextDescription key="hero-description" hero={hero} />
            ))}
          </HeroDescription>
        </ContainerGrid>
      </HeroContainer>
    </>
  );
}
