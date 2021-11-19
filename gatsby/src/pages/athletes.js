import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StaffGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding-bottom: 5%;
`;
const StaffStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 500px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--green);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;

export default function AthletesPage({ data }) {
  const staff = data.staff.nodes;
  return (
    <>
      <StaffGrid>
        {staff.map((person) => (
          <StaffStyles>
            <h2>
              <span className="mark">{person.name}</span>
            </h2>
            <Img fluid={person.image.asset.fluid} />
            <span className="description">{person.description}</span>
          </StaffStyles>
        ))}
      </StaffGrid>
    </>
  );
}

export const query = graphql`
  query {
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
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
