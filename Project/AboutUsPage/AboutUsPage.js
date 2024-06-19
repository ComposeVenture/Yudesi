import { HOMEPAGE } from "../HomePage/HomePage.js"

export const ABOUTUSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
        
            <h1 class='Section'>Yudesi History</h1>
        
        `,

        `
            
            <h1 class='CompanyName'>Yudesi Organic Supplies Limited</h1>

            <p class='Data'>

                Yudesi Organic Supplies Ltd is an agribusiness company located in Kebula, Kaderuna, Budaka District engaged in trading high quality cassava flour,Maize Flour,Rice,Sorghum Flour,Beans,G.nuts and intends to venture into full scale production of High-Grade Flour and conversion of cassava peel waste to High-Quality Cassava Peel Mash (HQCPM) for animal feeds. 

                <br><br>

                With sustainability as our cornerstone, we founded Yudesi Organic Supplies Ltd to bridge the gap between industrious farmers and customers seeking the very best in organic & natural produce. We’ve been able to do that and so much more – from meeting and exceeding our customers’ expectations to supporting our farmers at the grassroots level.

            </p>

            <h1 class='CompanyName'>Our History</h1>

            <p class='Data'>

                Yudesi Organic Supplies Ltd was conceptualized in 2020 and has humble beginnings as a cassava farm in Budaka district. As the concept picked up, the company was formally registered with the government of Uganda on 11th February 2022. Yudesi Organic Supplies Ltd is a privately owned limited liability company located in Kebula, Kaderuna, Budaka District. Following years of acting as a trader in dry cassava chips and cassava flour, Maize Flour and Rice, the company intends to setup a factory in Kebula to build the capacity to instantly purchase and process Maize Flour, High Quality Cassava Flour (HQCF) and convert cassava peel waste to High-Quality Cassava Peel Mash (HQCPM) for Animal Feeds. The company is setting up a network of over 400 smallholder contract farmers who will produce and sell to the factory. With the setup of a modern processing factory using modern flash drying technology in Budaka, the company will be able to process and market 50 tons of Flour per day in the early stages of production.

                <br><br>

                Uganda is known within the region as a country that is blessed with plenty and a wide variety of food. Food varieties are as many as tribes, ranging from maize, beans, banana, cassava, sweet potatoes, millet, sorghum, rice, field peas, cow peas, pigeon peas, groundnuts, sim sim, soya bean, Irish potatoes to mention but a few.

                However, Uganda faces high levels of food loss and waste (FLW) along critical value chains. This is perpetuating food insecurity and compromising trade competitiveness.  Food losses and wastages arise mainly due to poor post-harvest handling practices and through the absence of adequate and appropriate food infrastructure in harvest and post-harvest systems. For example, during the preparation stages (poor drying leading to high moisture content) storage, transportation and processing.
                Moreover, the majority of the farmers still use rudimentary methods like drying on uncovered ground, storage in sacks or pouring on ground, hand shelling or beating. Drying and storing on ground makes agricultural produce become susceptible to discolouration, and contamination with foreign matters, termite damage, mould and debris

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/food wastage.jpg'/>

                <img class='HeldImage' src='../../Components/Library/Images/fod wastage 2.jpg'/>

                <img class='HeldImage' src='../../Components/Library/Images/food wastage 3.jpg'/>

            </div>

            <p class='Data'>

                Storage in inappropriate materials (non-hermetic bags) like bags/sacks makes the stored produce vulnerable to storage pests (like rodents, weevils, termites), contamination by mould and aflatoxin, and insect frass.
                FLW is also caused by the wrong usage of agro-inputs and wrong inputs (pesticides, herbicides, acaricides) during production and storage, and poor processing equipment like grain milling machines that leave particles in the processed flour. We therefore armed the Farmers with the necessary education and the tools, so they could realize their full potential and their vision.

                <br><br>

                Our unique hand-on approach ensures that the entire supply chain right from cultivation all the way to packaging passes through stringent globally accredited quality standards. We are thoroughly involved and oversee every step of the manufacturing process, and our rigorous quality checks ensure that our customers get the finest local product, without any compromises or shortcuts.

                <br><br>

                We stand behind the farmers through the entire process – from training camps to cultivation to harvest – and guarantee the purchase of their yield at a premium. Yudesi Organic Supplies Ltd provides a global platform for local farmers to market their product, and make sure that they get the best return for their hard work.

            </p>

            <h1 class='CompanyName'>Our Achievements</h1>

            <h3 class='CompanyName'>Organic And Natural</h3>

            <p class='Data'>

                Yudesi Organic Supplies Is the Only Alternative Delivering Meaningful Health Results.
                It is hard to miss the problems arising in the wake of the conventional food system–toxic exposures, birth defects, learning disabilities, obesity, water pollution, unacceptable suffering by farm animals, to name a few. While dozens of labels promise undefined and unverified benefits, the nourishing and delicious label stands apart in delivering what people need–nutritious food, grown using methods that minimize the use of toxins while building soil quality and protecting water quality. A growing, dynamic organic & natural food sector will stimulate valuable changes benefiting all of agriculture, as well as everyone dependent on the farmer for three square meals a day

            </p>

            <div class='ImageHolder'>

                <img class='HeldImage' src='../../Components/Library/Images/archievedcassava.jpg'/>

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