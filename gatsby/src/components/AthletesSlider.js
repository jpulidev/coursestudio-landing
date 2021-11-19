import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import regular from '../assets/fonts/Graphik-Regular.ttf';

const PlayerContainer = styled.div`
  @font-face {
    font-family: 'Cutive';
    src: url(${regular});
  }
  margin-top: -85px;
  margin-left: 37px;
  h4 {
    font-size: 16px;
  }

  p {
    font-family: 'Cutive';
    font-size: 12px;
    margin: 0;
    margin-bottom: 10px;
    margin-top: 19px;
  }
  h4 {
    font-size: 17px;
  }
`;

const InfoGrid = styled.div`
  span {
    color: var(--white);
    border-bottom: 1px solid;
    padding-bottom: 3px;

    a {
      color: var(--white);
    }
  }
`;

const SectionSlider = styled.div`
  background: linear-gradient(to top, #fff 50%, #1d201f 50%);
  height: 750px;
`;

const SliderContainer = styled.div`
  max-width: 1150px;
  height: 650px;
  margin: 0 auto;

  .slider-container {
    background: transparent;

    [aria-hidden='true'] {
      visibility: hidden;
    }

    .slick-prev {
      left: 25% !important;
      z-index: 999;
      width: 48px;
      height: 48px;
    }
    .slick-next {
      right: 27% !important;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 48px !important;
      line-height: 1;
      opacity: 1;
    }
    .slick-arrow {
      box-shadow: none !important;
    }

    .slick-active {
      z-index: 999;
      position: relative;
    }
    .slick-center {
      position: relative;
      z-index: 1000;
    }
    :not(.slick-current) {
      h4 {
        font-size: 12px !important;
      }
    }

    .slick-current {
      div {
        .slide-container {
          width: 533px !important;

          .image-slider {
            border-radius: 24px;
          }
        }
        p {
          font-size: 26px !important;
          margin-top: -19px;
        }
        h4 {
          font-size: 17px !important;
        }
      }
    }
    .slick-slide {
      height: 638px;
      display: grid;
      justify-content: center;
      align-items: center;
    }

    .slick-slide img {
      display: block;
      border-radius: 19px;
    }
  }
`;

export default function SimpleSlider({ staff }) {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
  };
  return (
    <SectionSlider>
      <SliderContainer id="home">
        <Slider className="slider-container" {...settings}>
          {staff.map((person) => (
            <div key="person-slider" className="slide-container">
              <img
                className="image-slider"
                key="person-image"
                src={person.image.asset.fluid.src}
              />
              <PlayerContainer id="player">
                <InfoGrid>
                  <p key="player-connect">
                    Connect with{' '}
                    <span>
                      {' '}
                      <Link to="/athletes">{person.name}</Link>
                    </span>
                  </p>
                </InfoGrid>
                <h4 key={person.description}>{person.description}</h4>
              </PlayerContainer>
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </SectionSlider>
  );
}
