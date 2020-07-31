import React from 'react';
import {MainFooter, FooterContainer} from '../../styles/js/footer.styles';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';


const Footer = () => {

        return (
            <MainFooter>
                <FooterContainer>
                    <FooterLeft/>
                    <FooterRight/>
                </FooterContainer>
            </MainFooter>    
        )
};

export default Footer;