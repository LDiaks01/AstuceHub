import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Styles/App.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
   <div className='diapo'>
   <Carousel activeIndex={index} onSelect={handleSelect}>
     
        <img
          className="img"
          src="https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fsto.2Fgallery.2Fb7ba736f61b3f723_60d5e10f65a6215b8526fda4.2Epng/640x360/quality/80/fortnite-top-1-des-jeux-les-plus-joues-en-2020-et-2021.jpg"
          alt="First slide"
        />
   
      <Carousel.Item>
        <img
          className="img"
          src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_ApexLegends_S13_image1600w.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FMJ5DXH7JFGPRKP3JAOKK5DKS4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   </div>
  );
}



export default  ControlledCarousel;