import { HOMEPAGE } from "../HomePage/HomePage.js"

export const PRODUCTSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
        
            <h1 class='Section'>Yudesi Products</h1>
        
        `,

        `

            <h1 class='CompanyName'>Yudesi Organic Cassava Flour</h1>

            <p class='Data'>

                Yudesi Organic Cassava Flour is gluten-free, non-allergenic, grain-free and nut-free; low in calories, fat and sugar; and inexpensive. It has thermal and pasting properties

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/cassava flour.jpg'/>

            </div>

            <p class='Data'>

                Yudesi Organic Cassava Flour makes a good choice for people with health conditions like diabetes, high blood pressure or high cholesterol, since it’s extremely low in salt/sodium, sugar and fat, plus totally free from refined carbohydrates and synthetic ingredients. Depending on what other ingredients you use the flour with, it can help you maintain normal blood sugar and provide a good source of energy.

            </p>

            <h1 class='CompanyName'>Yudesi Organic Maize Flour</h1>

            <p class='Data'>

                Maize meal is a staple food enjoyed in almost all African countries.

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/maize flour.jpg'/>

            </div>
                    
            <p class='Data'>

                Yudesi Organic Maize Flour is a popular ingredient in gluten free cooking and is versatile enough to use for both sweet and savoury dishes, giving a distinctive and appealing flavour.In addition to the starch, Maize Flour also contains fibre, protein and a small amount of fat.

            </p>

            <h1 class='CompanyName'>Yudesi Organic Rice </h1>

            <p class='Data'>

                Rice meal is a staple food enjoyed in almost all African countries.

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/rice.jpg'/>

            </div>

            <p class='Data'>

                Yudesi Organic Rice  is locally grown in Uganda ,incorporating a natural and organic touch. Yudesi Organic Rice is a ravishing grain in size, shape and taste with an enticing Aroma that relishes your taste buds and natural flavours along with a creamy whiteness in the grain dedicated to the feeling of Uganda.

            </p>

            <h1 class='CompanyName'> Yudesi Organic Ground Nuts </h1>

            <p class='Data'>

                Ground Nuts Are clean And Organic with Natural Taste .

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/gnuts.png'/>

            </div>

            <p class='Data'>

                Yudesi Organic Ground Nuts are widely consumed and is great for human health.Yudesi Organic Ground Nuts  provide clean and natural taste to boost your health.

            </p>

            <h1 class='CompanyName'> Yudesi Organic Beans </h1>

            <p class='Data'>

                Yudesi organic Beans are nutrient-rich foods; they contain a variety of vitamins, minerals and other nutrients while providing a moderate amount of calories. Beans provide protein, fiber, folate, iron, potassium and magnesium while containing little or no total fat, trans-fat, sodium and cholesterol. Because of their high concentration of health-promoting nutrients, consuming more beans in the diet could improve overall health and also decrease the risk of developing certain diseases, including heart disease, obesity and many types of cancers. 

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/beans.jpg'/>

            </div>

            <h1 class='CompanyName'> Yudesi Organic Sorghum </h1>

            <p class='Data'>
                
                Sorghum is a nutrient-packed grain that you can use in many ways. It's rich in vitamins and minerals like B vitamins, magnesium, potassium, phosphorus, iron, and zinc. It's also an excellent source of fiber, antioxidants, and protein. 

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/sorghumorganic.jpg'/>

            </div>

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