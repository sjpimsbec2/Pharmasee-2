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

function openModalPls(obj, img){
    console.log(obj);

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
     var modalClass = modal.classList[1] + " --- " + name;
     
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
     image.classList.add("img-responsive");
     image.src = img;
     data.appendChild(image);
    ////////////
    
    

 
   
 
     
  
}

function ComponentCard(obj) {
    return `<div class="column ">
    <div class="column">
      <div class="store-tag">
        ${obj.store}
</div>
    <div class="card ${obj.name}">
      <img onclick="openModalPls('${removeSingleQuote(obj.store)}', '${obj.image}')" class="card-test" src=${obj.image} alt="${obj.name}" >
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
