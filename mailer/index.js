const mailer = require('nodemailer');
const  welcome  = require('./welcome_template');
const purchase = require('./new_purchase_template');

require('dotenv').config();

const getEmailData = (to,name,token,type,transactionData) => {
    let data = null;
    
    switch(type){
        case 'welcome':
            data = {
                from: 'TacoShop <reyes.coding.21@gmail.com>',
                to,
                subject: `Welcome ${name}, and thank you for joining TacoShop`,
                html: welcome()
            }
        break;
        case 'purchase':
            data = {
                from: 'TacoShop <reyes.coding.21@gmail.com>',
                to,
                subject: `Purchase summary for ${name}`,
                html: purchase(transactionData)
            }
        break;
        default:
            return data;
    }
    
    return data
}

const sendEmail = (to ,name ,token ,type , transactionData = null) => {
    const sntpTransport = mailer.createTransport({
        service:'Gmail',
        auth:{
            user: 'reyes.coding.21@gmail.com',
            pass: process.env.PASS
        }
    });
    
    const mail = getEmailData(to,name,token,type,transactionData)
    
    sntpTransport.sendMail(mail,function(error,response){
        if(error){
            console.log(error);
        } else {
            console.log('email sent');
        }
        sntpTransport.close();
    });
};

module.exports = sendEmail;