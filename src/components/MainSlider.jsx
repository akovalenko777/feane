import { useEffect, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSliderItem from "./common/MainSliderItem";

export default function MainSlider(){
  const [slides, setSlides] = useState([])

  const fetchSlides = async ()=>{
    const resp = await fetch('/data/slider.json')
    const json = await resp.json()
    setSlides(json)
  }

  useEffect(()=>{
    fetchSlides()
  }, [])

  const settings = {
    dots: true,
    appendDots: dots => (
      <div>
      <div className="container">
        <ol className="carousel-indicators"> {dots} </ol>
      </div>
      </div>
    ),
    customPaging: i => (
      <div>
        {i + 1}
      </div>
    )
  }

  return <section className="slider_section ">
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <Slider {...settings}>
        {slides.map((slide, index)=><MainSliderItem {...slide} key={index} />)}
      </Slider>
    </div>
  </section>
}