import { ABOUTUSPAGE } from "../AboutUsPage/AboutUsPage.js";
import { CONTACTUSPAGE } from "../ContactsUsPage/ContactUsPage.js";
import { PRODUCTSPAGE } from "../ProductsPage/ProducatsPage.js";

export const HOMEPAGE=()=>{

    HEADERWIDGET(
            
        `

            <img class='AppLogo' src='../Components/Library/Images/app_icon.png'/>

            <h1 id='Products' class='AppName'>Products</h1>

            <h1 id='AboutUs' class='AppName'>About Us</h1>

            <h1 id='ContactsUS' class='AppName'>Contact Us</h1>

        `,

        `

            <img class='SplashLogo' src='../Components/Library/Images/app_icon.png'/>

            <h1 class='CompanyName'>Yudesi Organic Supplies Limited</h1>

            <p class='Data'>
                We are the Leading Afro-Organic and Natural Food Supplies Firm In Eastern Uganda Providing Quality Afro-Organic and Natural Produce in the Following Products:                
            </p>

            <ul>
                <li>Rice</li>
                <li>MaizeFlour</li>
                <li>CassavaFlour</li>
                <li>Sorghum </li>
                <li>GroundNuts</li>
            </ul>

            <h1 class='CompanyName'>Our Location</h1>

            <p class='Data'>
                Yudesi Organic Supplies Limited is located At <b>KEBULA,KADERUNA-BUDAKA DISTRICT</b>
            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='${IMAGEPATH}hardwork.jpg'/>
            
                <img class='HeldImage' src='${IMAGEPATH}casaavaplantation.jpg'/>
            
                <img class='HeldImage' src='${IMAGEPATH}sorghum.jpg'/>
            
                <img class='HeldImage' src='${IMAGEPATH}cassava.jpg'/>

                <img class='HeldImage' src='${IMAGEPATH}beans.jpg'/>

            </div>

            <h1 class='CompanyName'>Our Story</h1>

            <p class='Data'>

                Yudesi Organic Supplies Ltd was founded in 2022 in an age when going organic & natural was still more of a luxury than a lifestyle. Our main goal – which remains true today – was to make quality organic & natural ingredients more accessible to regional customers, while making our credible farmers economically secure and productive. We recognized that there were so many farmers in communities who had the potential to offer high-quality products, but no way to scale or market them. Uganda is known within the region as a country that is blessed with plenty and a wide variety of food. Food varieties are as many as tribes, ranging from maize, beans, banana, cassava, sweet potatoes, millet, sorghum, rice, field peas, cow peas, pigeon peas, groundnuts, sim sim, soya bean, Irish potatoes to mention but a few.

            </p>

            <div class='ContactsDiv'>

                <img id='number' src='${WHITEICONS}phone.png'/>

                <img id='homegmail' src='${WHITEICONS}gmail.png'/>

                <img id='homewhatsapp' src='${WHITEICONS}whatsapp.png'/>
            
            </div>

        `,''
    );

    CLICKED('#Products',()=>{PRODUCTSPAGE()});

    CLICKED('#AboutUs',()=>{ABOUTUSPAGE()});

    CLICKED('#ContactsUS',()=>{CONTACTUSPAGE()});

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
  
};