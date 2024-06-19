import { HOMEPAGE } from "../HomePage/HomePage.js"

export const CONTACTUSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
        
            <h1 class='Section'>Yudesi Reach Out</h1>
        
        `,

        `
            
            <h1 class='CompanyName'>Yudesi Organic Supplies Limited</h1>

            <p class='Data'>

                Yudesi Organic Supplies Ltd can be contacted via : 

            </p>

            <p class='Data'>
                Yudesi Organic Supplies Limited is located At <b>KEBULA,KADERUNA-BUDAKA DISTRICT</b>
            </p>
            
            <div class='ContactsDiv'>

                <img id='number' src='${WHITEICONS}phone.png'/>

                <img id='homegmail' src='${WHITEICONS}gmail.png'/>

                <img id='homewhatsapp' src='${WHITEICONS}whatsapp.png'/>
            
            </div>

        `,''

    );

    CLICKED('#number',()=>{
        const phoneNumber = '+256775901235'; 
        window.location.href = 'tel:' + phoneNumber; 
    });

    CLICKED('#homewhatsapp',()=>{

        const phoneNumber = '+256775901235'; // Replace this with the phone number you want to message on WhatsApp
        const message = 'YUDESI ORGANIC SUPPLIES LIMITED'; // Optional: Replace this with the message you want to send
    
        // Constructing the WhatsApp URI
        let whatsappURI = 'https://wa.me/' + phoneNumber;
        if (message) {
            whatsappURI += '?text=' + encodeURIComponent(message);
        }
    
        // Opening WhatsApp
        window.location.href = whatsappURI;
    });

    CLICKED('#number',()=>{

        const emailAddress = 'yudesiorganicsuppliesltd@gmail.com'; // Replace this with the email address you want to open Gmail with
        const subject = 'Subject'; // Optional: Replace this with the subject of the email
        const body = 'Body'; // Optional: Replace this with the body of the email
    
        // Constructing the mailto URI
        let mailtoURI = 'mailto:' + encodeURIComponent(emailAddress);
        if (subject) {
            mailtoURI += '?subject=' + encodeURIComponent(subject);
        }
        if (body) {
            mailtoURI += (subject ? '&' : '?') + 'body=' + encodeURIComponent(body);
        }
    
        // Opening Gmail
        window.location.href = mailtoURI;

    });

}