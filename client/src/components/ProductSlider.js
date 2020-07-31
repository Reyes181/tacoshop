import React, {useState, useEffect, memo} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import ProductCard from './ProductCard';

import {ProductSliderContainer, PrevArrows, NextArrows} from '../styles/js/product-slider.styles';
import '../styles/css/product-slider.styles.scss';

const ProductSlider = ({collection}) => {
    const [sizeWidth, setSizeWidth] = useState(window.innerWidth) 
    const [size, setSize] = useState(4);

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <PrevArrows
                className='aroow'
                onClick={onClick}
            />
        );
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <NextArrows
                
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: size,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow/>
        
    }

    const update = () => {
        setSizeWidth(window.innerWidth);
    };
    
    useEffect(() => {
        
        window.addEventListener("resize", update)
        if(sizeWidth < 800){
           return setSize(1)
        }
        return () => window.removeEventListener("resize", update)
    },[sizeWidth])

    const shuffled = collection.items.sort(() => 0.5 - Math.random())

    return (
        <ProductSliderContainer >
            <Slider {...settings}>
                {shuffled.slice(0, 6).map(item => (
                    <Link  key={item.id} to={{pathname: `/shop/item/${item.name}`, state:{product: item, collection}}}>
                        <ProductCard {...item}/>
                    </Link>
                    ))
                }
            </Slider>
        </ProductSliderContainer>    
    );
};


export default memo(ProductSlider);