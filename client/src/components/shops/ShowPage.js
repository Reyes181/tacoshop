import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addItem} from '../../redux/cart/cart.action';
import ProductSlider from '../ProductSlider';
import {ProductButtonDisabled, ProductCollectionContainer, ProductColors, Productimage,
    ProductContainer, ProductDesc, ProductDetailContainer, ProductHeader, ProductImageContainer, ProductImages,
    ProductMainImage, ProductMaterials, ProductDetails, ProductQuantity, ProductSizes, ProductSizeButtons, ProductTitles} from '../../styles/js/product.styles';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const ShowPage = ({location, addItem}) => {
    const [image, setImage] = useState(null);
    const [shopSize, setSize] = useState(null);
    const [open, setOpen] = useState(false);

    
    useEffect(() => {
        if(location.state.product !== undefined){
            setImage(location.state.product.imageUrl);
            window.scrollTo(0, 0)
            document.title = `${location.state.product.name} - Taco Shop`
        }
    }, [location]);

    const switchImg = (e) => {
        let newImg = e.target.getAttribute('value')
        setImage(newImg)
    }

    const addSize = (e) => {
        let newsize = e.target.getAttribute('value').toUpperCase();
        setSize(newsize);
    }

    const resetState = () => {
        addItemsToCart()
        setSize(null);
    }

    const addItemsToCart = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    
    const {name, price, color, size, desc, material, images} = location.state.product;
    const {collection} = location.state
    let items = [{item: location.state.product, size: shopSize, collection: collection}]
    
    return(
        <ProductContainer>
            <ProductHeader>
                <h6>Home / {name}</h6>
            </ProductHeader>
            <ProductDetailContainer>
            <ProductImageContainer>
                <ProductMainImage style={{background: `url(${image})`}}/>
                <ProductImages>
                {images.map((image, i) => (
                    <Productimage value={image} onClick={switchImg} key={i} style={{background: `url(${image})`}}/>
                ))}
                </ProductImages>
                
            </ProductImageContainer>
            
            <ProductDetails>
                <ProductTitles>
                    <h3>{name}</h3>
                    <p>${Number.parseFloat(price).toFixed(2)}</p>
                </ProductTitles>
                <ProductColors>
                    <p>Color</p>
                    <div style={{backgroundColor: `${color}` }}/>
                </ProductColors>
                <ProductSizes>
                    {size !== null ?
                        <>
                            <p>Size</p>
                            <ProductSizeButtons>
                                {size.map((m, i) => (
                                    <button  onClick={addSize} id={i} value={m} key={i}>{m}</button>
                                ))}
                            </ProductSizeButtons>
                        </>
                        :
                        <></>
                    }
                </ProductSizes>
                <ProductQuantity>
                    <p>Quantity</p>

                </ProductQuantity>
                <ProductDesc>
                    {desc}
                </ProductDesc>
                <ProductMaterials>
                    <ul>
                        {material !== null ?
                            <>
                            {material.map((m, i) => (
                                <li key={i}>{m}</li>
                            ))}
                            </>
                            :
                            <></>
                        }
                        
                    </ul>
                </ProductMaterials>
                {size !== null ? 
                    <>
                        {shopSize !== null ? 
                            <Button onClick={() => {addItem(items); resetState()}}>Add to Cart</Button>
                            :
                            <ProductButtonDisabled>
                                <button disabled>Add to Cart</button>
                                <span>Select a size before adding to cart</span>
                            </ProductButtonDisabled>
                        }
                    </>
                    :
                    <Button onClick={() => {addItem(items); addItemsToCart()}}>Add to Cart</Button>
                }
                
            </ProductDetails>
            
            </ProductDetailContainer>

            <ProductCollectionContainer>
                <h5><span>More from this Collection</span></h5>
                <ProductSlider collection={collection}/>
            </ProductCollectionContainer>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText>
                        Item added to cart.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </ProductContainer>
    )
    
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(ShowPage));