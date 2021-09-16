import { useEffect, useRef, useState } from "react";
// styles
import "./styles.scss"

import Slider from "react-slick";

import PrimaryButton from "../button";
import { sliderData, thumbnailData } from "./testimonialData";

function TestimonialSlider() {

  // const media = window.matchMedia(`(max-width: 1024px)`);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  var settings = {
    // dots: (media.matches === true ? true : null),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={slider1 => setNav1(slider1)}
        arrows={false}
        adaptiveHeight={true}
        className="sliderData-slider"
      >
        {sliderData.map((item) => {
          return (
            <>
              <div className="slider-content-block">
                <div className="slider-content">
                  <div className="row">
                    <div className="col-12 col-lg-7">
                      <div className="media-box">
                        <video>
                          <source src={item.videoLink} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="testimonial-content">
                        <div className="message">{item.message}</div>
                        <div className="user-name">{item.userName}</div>
                        <div className="user-details">{item.userDetails}</div>
                        <div className="action-box">
                          <PrimaryButton
                            buttonName="Try now"
                            className="try-now-btn transparent-btn btn-lg"
                            btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-dark.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
        slidesToShow={3}
        slidesToScroll={1}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={false}
        className="thumbnail-slider"
      >
        {thumbnailData.map((data) => {
          return (
            <>
              <div className="slider-thumbnail-block">
                <div className="thumbnail-content fx fx--ai-c">
                  <div className="user-img-box mr--20">
                    <img className="user-img" src={data.userImg} alt="user icon" width="52" height="52" />
                  </div>
                  <div className="user-details-box">
                    <div className="username">{data.userName}</div>
                    <div className="user-details">{data.userDetails}</div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}
export default TestimonialSlider;