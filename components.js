  ////// ===== modal ====== /////
  var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  span.onclick = function() {
  modal.style.display = "none";
}

function openModalPls(storeName, imageLink, nameID, stocks, completeName, category,
     prescription, price, date){
    console.log(storeName);
    var description = DESCRIPTION[nameID];
    // clear all the data
     var data = document.getElementsByClassName("data-here")[0];
     data.innerHTML = "";
 
     /** 
     Category: ___
 Description: ___
 Prescription: (kasi need daw po yung "Over-the-counter" na word)
 Stock: __ **/
    modal.style.display = "block";
   // get modal class but not the first one
     var modalClass = modal.classList[1] + " --- " + nameID;
     
   // add data
     var data = document.getElementsByClassName("data-here")[0];
     console.log(document.getElementsByClassName("data-here"));
     console.log(data);
     // get the second class
     var secondClass = data.classList[0];
     // add the store name

     ////////////
     var image= document.createElement("img");
     // add class
     image.classList.add("img-responsive-modal");
     image.src = imageLink;
     data.appendChild(image);
    // add class named 'nameid'
        
        // add data inside nameid
// price 
    data.innerHTML += `<div class="price-tag" id="font-card"> ${price} </div>`;
    data.innerHTML += `<div class="price-tag" id="font-card"> ${completeName} </div>`;
    data.innerHTML += `<div class="prescription">${prescription} </div>`;
   
    // if available
    data.innerHTML += `<div class=${ (parseInt(stocks)) > 0 ? "avail" : "not-avail"} id="font-card-bold">
    ${ (parseInt(stocks)) > 0 ? "Available" : "Not Available"}  `;
    data.innerHTML += `<div class="stock"> Stocks: ${stocks} </div>`;
    
    data.innerHTML += `<div class="space" style="padding-top:5%;"></div>`;
    
    data.innerHTML += `<div class="category"> Category: ${category} </div>`;
    data.innerHTML += `<div class=""> ${description} </div>`;

    // add space at 1%
    data.innerHTML += `<div class="space" style="padding-top:5%;"></div>`;
    data.innerHTML += `<div class="store"> ${storeName} </div>`;
    data.innerHTML += `<div class="date">Updated at: ${date} </div>`;

   
    
    
    

 
   
 
     
  
}

function ComponentCard(obj) {
    return `<div class="column ">
    <div class="column">
      <div class="store-tag">
        ${obj.store}
</div>
    <div class="card ${obj.name}">
      <img onclick="openModalPls('${removeSingleQuote(obj.store)}', 
                                '${obj.image}',
                                '${obj.nameid}',
                                '${obj.stock}',
                                '${obj.name}',
                                '${obj.category}',
                                '${obj.prescription}',
                                '${obj.price}',
                                '${obj.date}',

                                )" class="card-test" src=${obj.image} alt="${obj.name}" >
      <div class="price-tag" id="font-card">
        ${obj.price}
      </div>
      <div class="name-tag" id="font-card">
        ${obj.name}
      </div>
      <div class="prescription" id="font-card-bold">
        ${obj.prescription}
      </div>
     
      <div class=${ (parseInt(obj.stock)) > 0 ? "avail" : "not-avail"} id="font-card-bold">
          ${ (parseInt(obj.stock)) > 0 ? "Available" : "Not Available"}

      </div>
      <div class="generic" id="font-card-bold">
        Generic
      </div>

    
      
      
       </div>
    </div>
    </div>
            `
    
}


DESCRIPTION = {
  "Advil": "Advil temporarily relieves minor aches and pains such as headache",
  "Alaxan FR": "Alaxan FR is a pain reliever that can be used for different kinds of body and muscle pain including those that are caused by everyday activities (Unilab).",
  "Ascof Forte": "For the relief of mild to moderate cough due to common colds",
  "Ascorbic Acid": "Ascorbic acid is used to prevent or treat low levels of Vitamin C in people who do not get enough of the vitamin from their diets (WebMD).",
  "Bioflu": "Bioflu provides relief from flu and its multiple symptoms such as fever",
  "Biogesic": "Paracetamol (Biogesic) is a medication that is typically used to relieve mild to moderate pain such as headache",
  "Calpol": "Calpol is an alcohol-free suspension that is used to relieve mild to moderate fever and pain such as fever and pain after vaccination",
  "Ceelin Plus": "Ceelin® Plus provides children double protection against sickness with the powerful combination of Vitamin C and Zinc. It is the only brand made with ZincPlus® Technology that ensures the stable combination of these two ingredients so that kids get the full dosage they need (Unilab)",
  "Cherifer": "The vitamin preparation with Chlorella Growth Factor (CGF)",
  "Decolgen": "Decolgen is used for the relief of clogged nose",
  "Diatabs": "Diatabs is used for the control of acute non-specific diarrhea and/or chronic diarrhea associated with inflammatory bowel disease (Unilab).",
  "Dolfenal": "Dolfenal provides relief from commonly experienced intense pain such as headache",
  "Fern-C": "Helps increase body resistance to stress",
  "Flanax": "Relief of mild to moderately severe pain",
  "Folic Acid": "Folic acid is used to treat or prevent folic acid deficiency. It is a B-complex vitamin needed by the body to manufacture red blood cells. A deficiency of this vitamin causes certain types of anemia (low red blood cell count) (National Library of Medicines).",
  "ImmunPro": "ImmunPro contains a formula of vitamin C and zinc that may help strengthen your immune system to better protect your body against diseases. It also has a ZincPlus Tablet Technology that ensures a stabilized combination and absorption of vitamin C and zinc (UNILAB).",
  "Lomotil": "Lomotil (diphenoxylate/atropine) is an oral tablet prescribed to treat diarrhea. The usual starting dosage is two tablets of Lomotil taken four times per day",
  "Medicol Advance": "For the relief of headache. For the relief of toothache",
  "Myra-E": "Helps boost the immune system; helps gives healthy skin from w/in; helps contribute to the regulation of collagen breakdown; helps increase resistance against sickness (MIMS).",
  "Naproxen": "Naproxen provides fast and long-lasting relief from pain caused by arthritis",
  "Neozep Forte": "Neozep Forte is used for the relief of clogged nose",
  "Neurogen-E": "Neurogen-E is a Vitamin B-complex (vitamins B1",
  "Paracetamol": "Paracetamol or also known as acetaminophen is used to relieve pain such as body pain",
  "Plemex Forte": "This combination medication is used to temporarily treat cough",
  "Potencee": "Ascorbic Acid (Poten-Cee) is a Vitamin C brand offering a wide range of variants that cater to different needs",
  "Rexidol Forte": "For the relief of mild to moderate pain",
  "Robitussin": "Robitussin is used to temporarily relieve your cough from minor throat irritation or a cold. It also helps loosen phlegm from chest congestion so that you can cough it up and spit it out (Healthline).",
  "Solmux": "Solmux is used to treat cough with phlegm. It is scientifically proven to remove phlegm and bacteria that causes cough (Unilab).",
  "Tempra Forte": "Tempra offers relief from fever and headache for both adults and children (Taisho Pharmaceutical Holdings).",
  "Tuseran Forte": "Tuseran Forte is used for the relief of cough"
}