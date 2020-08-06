import React, {useEffect} from 'react';
import Slider from 'react-slick';
import lozad from 'lozad';

import SlideA from '../../assets/images/slide_a.webp';
import SlideB from '../../assets/images/slide_b.webp';
import SlideC from '../../assets/images/slide_c.webp';

import '../../styles/css/home-slider.styles.scss';
import {FeaturedButton, FeaturedContent, FeaturedHeader, FeaturedImage} from '../../styles/js/homes-slider.styles';

const HomeSlider = () => {

    useEffect(()=>{
        const observer = lozad(); // lazy loads elements with default selector as '.lozad'
        observer.observe();
    },[])

    const slides = [
        {
            img: SlideA,
            line: 'Spice up your closet',
            linkTo:'/shop/clothing'
        },
        {
            img: SlideB,
            line: 'Essentials for any occasion',
            linkTo:'/shop/accessories'
        },
        {
            img: SlideC,
            line: 'Keep things saucy',
            linkTo: '/shop/sauce-packet-collection'
        } 
    ]
    
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
    }
    
    const generateSlides = () => (
        slides ?
            slides.map((item,i)=>(
                <div key={i}>
                    <FeaturedImage
                        className="lozad" 
                        data-placeholder-background="red"
                        data-background-image-set={`url(${item.img})`}
                        // style={{
                        //     background:`url(${item.img})`,
                        // }}
                    >
                        <FeaturedContent>
                            <FeaturedHeader>{item.line}</FeaturedHeader>  
                            <FeaturedButton to={item.linkTo}>Shop Now</FeaturedButton>  
                        </FeaturedContent>
                    </FeaturedImage>  
                </div>    
            ))
        :null
    )
    
    return (
        <div className="featured_container">
            <Slider {...settings}>
                {generateSlides()}
            </Slider>
        </div>    
    );
};

export default HomeSlider;