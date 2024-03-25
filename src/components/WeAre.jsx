import AboutImg from '../assets/images/about-img.png'
import HeroImg from '../assets/images/hero-bg.jpg'
import { ParallaxBanner } from 'react-scroll-parallax'

export default function WeAre(){
  return (
    <ParallaxBanner
      layers={[
        { image: HeroImg, speed: -50 },
      ]}
    >
    <section className="about_section layout_padding">
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                We Are Feane
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </ParallaxBanner>
  )
}