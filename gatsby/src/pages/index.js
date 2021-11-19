import React from 'react';
import { graphql } from 'gatsby';
import HeroList from '../components/Hero';
import AthletesSlider from '../components/AthletesSlider';
import ScrollDown from '../components/ScrollDown';
import DescriptionDown from '../components/Description';
import ButtonDown from '../components/ButtonDown';

export default function HomePage({ data }) {
  const hero = data.hero.nodes;
  const staff = data.staff.nodes;
  const info = data.info.nodes;

  return (
    <>
      <HeroList hero={hero} />
      <ScrollDown info={info} />
      <DescriptionDown info={info} />
      <AthletesSlider staff={staff} />
      <ButtonDown info={info} />
    </>
  );
}

export const query = graphql`
  query HomeQuery {
    hero: allSanityHero {
      nodes {
        id
        name
        secondTitle
        strongTitle
        description
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
              srcWebp
            }
          }
        }
      }
    }
    info: allSanityInfo {
      nodes {
        infoscroll
        infobutton
        description
        name
      }
    }
    staff: allSanityPerson {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 810) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
