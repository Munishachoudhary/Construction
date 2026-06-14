import image1 from "../images/c-slide.jpg"
import image2 from "../images/hero-banner.jpg"
import image3 from "../images/image.jpeg"
import image4 from "../images/image2.jpeg"
import image5 from "../images/slide-1.jpeg"
import image6 from "../images/slide-2.jpg";
import image7 from "../images/img1.jpeg"
import image8 from "../images/img2.jpeg"
import image9 from "../images/img3.jpeg"
import image10 from "../images/img4.jpeg";
import image11 from "../images/img5.jpeg";

import { useState, useEffect } from "react";
import "../Styles/Imageslider.css";

const images = [image3, image4, image1, image10, image7, image2, image8, image9, image5, image10, image6, image11];
function Imageslider() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev - 1 + images.length) % images.length);
  // };

  return (
    <div className="slider">
      {/* <button onClick={prevSlide} className="btn">❮</button> */}

      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="slide-image"
      />

      {/* <button onClick={nextSlide} className="btn">❯</button> */}
    </div>
  );
}
export default Imageslider;