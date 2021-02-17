import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import image1 from '../../factory/images/default-404.jpg';
import image2 from '../../factory/images/loginWrapper.jpg';

const contents = [
  {
      title: 'he',
      description: 'world',
      button: 'abutton',
      image: image1
  },
  {
      title: 'hell',
      description: 'world',
      button: 'bbutton',
      image: image2
  },
  {
      title: 'hel',
      description: 'world',
      button: 'cbutton',
      image: image1
  }
]

const HomeCarousel = () => {
    return (
        <div>
            <Slider autoplay={1000} style={{height: '100vh'}}>
                {contents.map((ele) => <div key={ele} style={{heigth:1000}}>
                    {/*<h2>{slide.title}</h2>*/}
                    {/*<div>{slide.description}</div>*/}
                    <img src={ele.image} />
                </div>)}
                {/*<div container style={{backgroundImage: "url(" + image1 +")"}}>*/}
                {/*    <img src={image1} style={{height: '100%', width: "100%"}}/>*/}

                {/*</div>*/}
                {/*<img src={image2}/>*/}
                {/*<img src={image1}/>*/}
            </Slider>
        </div>
    );
};

export default HomeCarousel;