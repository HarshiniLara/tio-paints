import React from "react";
import {BsArrowRightCircleFill} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { navItems } from '../config/navitems';
import '../css/card.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",fontSize:30 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


function slider(){
    const settings = {
        
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              
            }
          },
          {
            breakpoint:700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite:true,
              dots:false
            }
          },
          {
            breakpoint:670,
            
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className="card">
          <div className="Head">Our Products</div>
            <Slider {...settings}>
              {navItems.map((product)=> product.name!=="HOME"?
              (
                <Card style={{ width: '18rem' }} id='card'>
                <img src="./Images/set_2/constn_chemicals/Admixture/Tio_Proof.jpg" className="img"></img>
                <Card.Body>
                  <Card.Title id="heading">{product.name}</Card.Title>
                  <Card.Text className="text">
                    We Support Some of the Biggest Training Organizations all over the World. We Serve all Time Zones
                  </Card.Text>
                  <Link to={product.route}><Button id="btn">Explore</Button></Link>
                </Card.Body>
              </Card> 
            ):null)}
            </Slider>  
        </div>
    )
}
export default slider;