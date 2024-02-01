import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";
import meter9 from "../assets/img/meter9.png";
import meter10 from "../assets/img/meter10.svg";
import meter11 from "../assets/img/meter11.png";
import meter12 from "../assets/img/meter12.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I work with such programming languages / frameworks as</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5 className="skillTitle">HTML</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter2} alt="Image" />
                                </div>
                                <h5 className="skillTitle">CSS</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter3} alt="Image" />
                                </div>
                                <h5 className="skillTitle">JS</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter4} alt="Image" />
                                </div>
                                <h5 className="skillTitle">React</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter5} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Redux & Redux-Toolkit</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter6} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Node JS & Express</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter7} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Type Script</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter8} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Next JS</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter9} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Nest JS</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter10} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Tanstack Query</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter11} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <div>
                                  <img src={meter12} alt="Image" />
                                </div>
                                <h5 className="skillTitle">Sass & Scss</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
