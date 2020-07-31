import React, {useState} from 'react';
import TacoBrand from '../../assets/images/taco_brand.png';
import ArrowRight from '../../assets/images/arrow.png';
import FormField from '../../assets/formFields';
import { firebasePromotions } from '../../firebase/firebase.utils';
import {FootLeft, FooterTacoImg, ErrorLabel, SuccessLabel} from '../../styles/js/footer.styles';

const FooterLeft = () => {
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSuccess] = useState('');
    const [formdata, setFormData] = useState({email:{
        element:'input',
        value:'',
        config:{
            name:'email_input',
            type:'email',
            placeholder: 'Enter your email'
        },
        validation:{
            required: true,
            email: true
        },
        valid: false,
        validationMessage:''
    }})
    

    const validate = (element) => {
        let error = [true,''];
        
        if(element.validation.email){
            const valid = /\S+@\S+\.\S+/.test(element.value);
            const message = `${!valid ? 'Must be a valid email':''}`;
            error = !valid ? [valid,message]: error;
        }
        
        if(element.validation.required){
            const valid = element.value.trim() !== '';
            const message = `${!valid ? 'This field is required':''}`;
            error = !valid ? [valid,message]: error
        }
        
        return error;
    }

    const updateForm = (element) => {
        const newFormdata = {...formdata};
        const newElement = {...newFormdata[element.id]};
        
        newElement.value = element.event.target.value;
        
        let validData = validate(newElement);
        
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]
        
        newFormdata[element.id] = newElement;
        
        setFormError(false);
        setFormData(newFormdata);
        
    }

    const successMessage = () => {
        setTimeout(()=> {
            setFormSuccess('')
        },2000)
    }
    
    const resetFormSuccess = (type) => {
        const newFormdata = {...formdata}
        
        for(let key in newFormdata){
           newFormdata[key].value= '';
           newFormdata[key].valid = false;
           newFormdata[key].validationMessage = '';
        }
        
        setFormError(false);
        setFormData(newFormdata);
        setFormSuccess(type ? 'Thank you for joining the club' : 'Email already entered')
        
        successMessage();
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        
        let dataToSubmit = {};
        let formIsValid = true;
        
        for(let key in formdata){
            dataToSubmit[key] = formdata[key].value;
            formIsValid = formdata[key].valid && formIsValid;
        }
        
        if(formIsValid){
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value")
                .then((snapshot)=>{
                    if(snapshot.val() === null){
                        firebasePromotions.push(dataToSubmit);
                        resetFormSuccess(true);
                    } else{
                        resetFormSuccess(false);
                    }
                });
        } else {
            setFormError(true);
        }
    }


    
    return (
        <FootLeft>
            <FooterTacoImg style={{background: `url(${TacoBrand})`}}/>
            <h2>Become a Taco Bell insider</h2>
            <div>
                <h6>Get the first taste of Taco Bell® news and offers via email.</h6>
                <form>
                    <FormField
                        id={'email'}
                        formdata={formdata.email}
                        change={(element)=> updateForm(element)}
                    />
                    <button onClick={(event)=> submitForm(event)}>Subscribe &nbsp; <img alt='subscribe' src={ArrowRight}/></button>
                    {formError ? 
                        <ErrorLabel>Something went wrong. Please try agian.</ErrorLabel>
                        :null
                    }
                    
                    <SuccessLabel>{formSuccess}</SuccessLabel>
                    
                </form>
            </div>
            <h4>Hungry? Visit TacoBell</h4>
        </FootLeft>  
    )
    
};

export default FooterLeft;