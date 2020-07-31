import React, {useState} from 'react';
import ArrowRight from '../../assets/images/arrow.png';
import FormField from '../../assets/formFields';
import { firebaseMessages } from '../../firebase/firebase.utils';
import {FootRight, ErrorLabel, SuccessLabel} from '../../styles/js/footer.styles';

const FooterRight = () => {
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSuccess] = useState('');
    const [formdata, setFormData] = useState({
        name:{
            element:'input',
            value:'',
            config:{
                name:'name_input',
                type:'text',
                placeholder: 'Name'
            },
            validation:{
                required: true
            },
            valid: false,
            validationMessage:''
        },
        email:{
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
        },
        phone:{
            element:'input',
            value:'',
            config:{
                name:'phone_input',
                type:'tel',
                placeholder: 'Cell number'
            },
            validation:{
                required: true
            },
            valid: false,
            validationMessage:''
        },
        message:{
            element:'textarea',
            value:'',
            config:{
                name:'message_input',
                type:'text',
                placeholder: 'Message...'
            },
            validation:{
                required: true
            },
            valid: false,
            validationMessage:''
        }
    });

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

    const updateForm = (element) =>{
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
        setFormSuccess(type ? 'Thank you for contacting, we wiil response as soon as possible' : 'Email already entered');
        
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
            firebaseMessages.push(dataToSubmit);
            resetFormSuccess(true);
                  
        } else {
            setFormError(true);
        }
    }


    
    return (
        <FootRight>
            <h2>Contact Us</h2>
            <h6>contactus@tacobelltacoshop.com</h6>
            <form>
                <FormField
                    id={'name'}
                    formdata={formdata.name}
                    change={(element)=> updateForm(element)}
                />
                <FormField
                    id={'email'}
                    formdata={formdata.email}
                    change={(element)=> updateForm(element)}
                />
                <FormField
                    id={'phone'}
                    formdata={formdata.phone}
                    change={(element)=> updateForm(element)}
                />
                <FormField
                    id={'message'}
                    formdata={formdata.message}
                    change={(element)=> updateForm(element)}
                />
                {formError ? 
                        <ErrorLabel>Something went wrong. Please try agian.</ErrorLabel>
                        :null
                    }
                    
                <SuccessLabel>{formSuccess}</SuccessLabel>
                <button onClick={(event)=> submitForm(event)}>Send Us A Message &nbsp; <img alt='contact' src={ArrowRight}/></button>
            </form>
        </FootRight>   
    )
    
};

export default FooterRight;