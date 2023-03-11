function ComponentCard(obj) {
    return `<div class="column ">
    <div class="column">
      <div class="store-tag">
        ${obj.store}
</div>
    <div class="card ${obj.name}">
      <img onclick="openModalPls('${removeSingleQuote(obj.store)}')" class="card-test" src=${obj.image} alt="${obj.name}" >
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