var p = 'Prescription Needed'
var o = 'Over-the-counter'
var listOfMedicines = [
   // DC Pharmacy

  {name: "Cetirizine",
    image: "images/DC/1.png",
    store: "DC Pharmacy",
    stock:100, prescription: 'Over-the-counter'},
  {name: "Azithromycin", image: "images/DC/2.png", store: "DC Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Glyxambi", image: "images/DC/3.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Biogesic", image: "images/DC/4.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Bioflu", image: "images/DC/5.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Advil Liquid Gel Capsule", image: "images/DC/6.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Diamicron MR", image: "images/DC/7.png", store: "DC Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Calpol", image: "images/DC/8.png", store: "DC Pharmacy", stock:0, prescription: 'Over-the-counter'},
  {name: "Glucotin", image: "images/DC/9.png", store: "DC Pharmacy", stock:0, prescription: 'Prescription Needed'},
  {name: "Saphormin", image: "images/DC/10.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Dolfenal", image: "images/DC/11.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Aspilets", image: "images/DC/12.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "ImmunPro", image: "images/DC/13.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Fern-C", image: "images/DC/14.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Sleepwell", image: "images/DC/15.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Bonamine", image: "images/DC/16.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Mefenamic Acid", image: "images/DC/17.png", store: "DC Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Centrum Advance", image: "images/DC/18.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Kremil-S Chewable", image: "images/DC/19.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Tempra Forte", image: "images/DC/20.png", store: "DC Pharmacy", stock:15, prescription: 'Prescription Needed'},
  {name: "Conzace Softgel", image: "images/DC/21.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Clusivol Plus", image: "images/DC/22.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Ascorbic Acid Vitamin", image: "images/DC/23.png", store: "DC Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Cefalexin", image: "images/DC/24.png", store: "DC Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Allerkid", image: "images/DC/25.png", store: "DC Pharmacy", stock:15, prescription: 'Over-the-counter'},
  //  Cetirizine: Over-the-counter
  //  Azithromycin: Prescription Needed
  //  Glyxambi: Over-the-counter
  //  Biogesic: Over-the-counter
  //  Bioflu: Over-the-counter
  //  Advil Liquid Gel Capsule: Over-the-counter
  //  Diamicron MR: Prescription Needed
  //  Calpol: Over-the-counter
  //  Glucotin: Prescription Needed
  //  Saphormin: Over-the-counter
  //  Dolfenal: Over-the-counter
  //  Aspilets: Over-the-counter
  //  ImmunPro: Over-the-counter
  //  Fern-C: Over-the-counter
  //  Sleepwell: Over-the-counter
  //  Bonamine: Over-the-counter
  //  Mefenamic Acid: Prescription Needed
  //  Centrum Advance: Over-the-counter
  //  Kremil-S Chewable: Over-the-counter
  //  Tempra Forte: Prescription Needed
  //  Conzace Softgel: Over-the-counter
  //  Clusivol Plus: Over-the-counter
  //  Ascorbic Acid Vitamin: Over-the-counter
  //  Cefalexin: Prescription Needed
  //  Allerkid: Over-the-counter
  {name: "Cetirizine", image: "images/DL/1.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Azithromycin", image: "images/DL/2.png", store: "DL Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Glyxambi", image: "images/DL/3.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Biogesic", image: "images/DL/4.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Bioflu", image: "images/DL/5.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Advil Liquid Gel", image: "images/DL/6.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Diamicron MR", image: "images/DL/7.png", store: "DL Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Calpol", image: "images/DL/8.png", store: "DL Pharmacy", stock:0, prescription: 'Over-the-counter'},
  {name: "Glucotin", image: "images/DL/9.png", store: "DL Pharmacy", stock:0, prescription: 'Prescription Needed'},
  {name: "Saphormin T500", image: "images/DL/10.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Dolfenal", image: "images/DL/11.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Aspilets", image: "images/DL/12.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "ImmunPro", image: "images/DL/13.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Fern-C", image: "images/DL/14.png", store: "DL Pharmacy", stock:14, prescription: 'Over-the-counter'},
  {name: "Sleepwell", image: "images/DL/15.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Bonamine", image: "images/DL/16.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Mefenamic Acid", image: "images/DL/17.png", store: "DL Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Centrum Advance", image: "images/DL/18.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Kremil-S Chewable", image: "images/DL/19.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Tempra Forte", image: "images/DL/20.png", store: "DL Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Conzace Softgel", image: "images/DL/21.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Clusivol Plus", image: "images/DL/22.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Ascorbic Acid Vitamin", image: "images/DL/23.png", store: "DL Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Cefalexin", image: "images/DL/24.png", store: "DL Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Allerkid", image: "images/DL/25.png", store: "DL Pharmacy", stock:14, prescription: 'Over-the-counter'},

  /** TJ Pharmacy */
  /**
  Biogesic: Over-the-counter	
Paracetamol: Over-the-counter
Paracetamol: Over-the-counter
Neozep: Over-the-counter
Bioflu: Over-the-counter	
Amoxicillin: Prescription Needed	
Diatabs: Over-the-counter
Colchicine: Prescription Needed	
Flanax: Over-the-counter
Rexidol: Over-the-counter
Alaxan FR: Over-the-counter
Metformin: Prescription Needed	
Robitussin: Over-the-counter
Solmux: Over-the-counter
Decolgen: Over-the-counter
Calciumade: Over-the-counter
Potencee: Over-the-counter
Kremil-S: Over-the-counter	
Lomotil: Over-the-counter
Tempra: Over-the-counter
Plemex Forte: Over-the-counter	
Gingko Biloba: Over-the-counter
Azithromycin: Prescription Needed
Basagine Insulin	: Prescription Needed
ASCOF Forte: Over-the-counter*/
  {name: "Biogesic", image: "images/TJ/1.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Paracetamol", image: "images/TJ/2.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Paracetamol", image: "images/TJ/3.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Neozep", image: "images/TJ/4.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Bioflu", image: "images/TJ/5.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Amoxicillin", image: "images/TJ/6.png", store: "TJ Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Diatabs", image: "images/TJ/7.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Colchicine", image: "images/TJ/8.png", store: "TJ Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Flanax", image: "images/TJ/9.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Rexidol", image: "images/TJ/10.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Alaxan FR", image: "images/TJ/11.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Metformin", image: "images/TJ/12.png", store: "TJ Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Robitussin", image: "images/TJ/13.png", store: "TJ Pharmacy", stock:13, prescription: 'Over-the-counter'},
  {name: "Solmux", image: "images/TJ/14.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Decolgen", image: "images/TJ/15.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Calciumade", image: "images/TJ/16.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Potencee", image: "images/TJ/17.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Kremil-S", image: "images/TJ/18.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Lomotil", image: "images/TJ/19.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Tempra", image: "images/TJ/20.png", store: "TJ Pharmacy", stock:13, prescription: 'Over-the-counter'},
  {name: "Plemex Forte", image: "images/TJ/21.png", store: "TJ Pharmacy", stock:13, prescription: 'Over-the-counter'},
  {name: "Gingko Biloba", image: "images/TJ/22.png", store: "TJ Pharmacy", stock:250, prescription: 'Over-the-counter'},
  {name: "Azithromycin", image: "images/TJ/23.png", store: "TJ Pharmacy", stock:250, prescription: 'Prescription Needed'},
  {name: "Basagine Insulin", image: "images/TJ/24.png", store: "TJ Pharmacy", stock:13, prescription: 'Prescription Needed'},
  {name: "ASCOF Forte", image: "images/TJ/25.png", store: "TJ Pharmacy", stock:13, prescription: 'Over-the-counter'},


  /** MD Pharmacy */
//   Cozaar Losaartan: Over-the- counter
// Trivastal Retard: Prescription Needed
// Sertralinehydrichloride: Prescription Needed
// Carbidopa Levodopa: Over- the-counter
// Clozapine: Prescription Needed
// Mirtazapine: Prescription Needed
// Tazocin Piperacillin: Prescription Needed
// Vortioxetine: Prescription Needed
// Isotretenion: Prescription Needed
// Ropinirole: Prescription Needed
// Aripiprazole: Prescription Needed
// Amiodarone: Prescription Needed
// Bromocriptine: Prescription Needed
// Escitalopram: Prescription Needed
// Bonamine: Over-the-counter 
// Venlafaxine: Prescription Needed
// Alendronate: Prescription Needed
// Acyclovir: Prescription Needed
// Albuterol sulfate: Prescription Needed
// Alfuzosin: Prescription Needed
// Olanzapine: Prescription Needed
// Risperidone: Prescription Needed
// Amoxicillin trihydrate: Prescription Needed
// Carmellose: Prescription Needed
// Escitalopram: Prescription Needed
{
  name: "Cozaar Lozartan",
  image: "images/MD/1.png",
  store: "MD Pharmacy",
  stock: 250,
  prescription: 'Over-the-counter'
  },
  {
  name: "Trivastal Retard",
  image: "images/MD/2.png",
  store: "MD Pharmacy",
  stock: 100,
  prescription: 'Prescription Needed'

  },
  {
  name: "Sertralinehydrichloride",
  image: "images/MD/3.png",
  store: "MD Pharmacy",
  stock: 300, 
  prescription: 'Prescription Needed'
  },
  {
  name: "Levodopa Carbidopa",
  image: "images/MD/4.png",
  store: "MD Pharmacy",
  stock: 150,
  prescription: o,
  },
  {
  name: "Clozapine",
  image: "images/MD/5.png",
  store: "MD Pharmacy",
  stock: 50,
  prescription: p,
  },
  {
  name: "Mirtazapine",
  image: "images/MD/6.png",
  store: "MD Pharmacy",
  stock: 200,
  prescription:p,
  },
  {
  name: "Tazocin",
  image: "images/MD/7.png",
  store: "MD Pharmacy",
  stock: 75,
  prescription: p,
  },
  {
  name: "Viortoxetine",
  image: "images/MD/8.png",
  store: "MD Pharmacy",
  stock: 225,
  prescription:p,
  },
  {
  name: "Isotretenion",
  image: "images/MD/9.png",
  store: "MD Pharmacy",
  stock: 125,
  prescription:p,
  },
  {
  name: "Ropinirole",
  image: "images/MD/10.png",
  store: "MD Pharmacy",
  stock: 175,
  prescription:p,
  },
  {
  name: "Aripiprazole",
  image: "images/MD/11.png",
  store: "MD Pharmacy",
  stock: 300,
  prescription:p,
  },
  {
  name: "Amiodarone",
  image: "images/MD/12.png",
  store: "MD Pharmacy",
  stock: 100,
  prescription:p,
  },
  {
  name: "Bromocriptine",
  image: "images/MD/13.png",
  store: "MD Pharmacy",
  stock: 50,
  prescription:p,
  },
  {
  name: "Escitalopram",
  image: "images/MD/14.png",
  store: "MD Pharmacy",
  stock: 250,
  prescription:p,
  },
  {
  name: "Bonamine",
  image: "images/MD/15.png",
  store: "MD Pharmacy",
  stock: 150,
  prescription: 'Over-the-counter'
  },
  {
  name: "Desvenlafaxine",
  image: "images/MD/16.png",
  store: "MD Pharmacy",
  stock: 175,
  prescription:p,
  },
  {
  name: "Alendronate",
  image: "images/MD/17.png",
  store: "MD Pharmacy",
  stock: 225,
  prescription:p,
  },
  {
  name: "Acyclovir",
  image: "images/MD/18.png",
  store: "MD Pharmacy",
  stock: 200,
  prescription:p,
  },
  {name:"Albuterol", image:"images/MD/19.png", store:"MD Pharmacy", stock: 250, prescription: 'Prescription Needed'},
{name:"Alfuzosin", image:"images/MD/20.png", store:"MD Pharmacy", stock: 250, prescription: 'Prescription Needed'},
{name:"Olanzapine", image:"images/MD/21.png", store:"MD Pharmacy", stock: 250, prescription: 'Prescription Needed'},
{name:"Risperidone", image:"images/MD/22.png", store:"MD Pharmacy", stock: 250, prescription: 'Prescription Needed'},
{name:"Amoxicillin", image:"images/MD/23.png", store:"MD Pharmacy", stock: 250, prescription: 'Prescription Needed'},
{name:"Carmellose", image:"images/MD/24.png", store:"MD Pharmacy",stock:12, prescription: 'Prescription Needed'},
{name:"Basagine", image:"images/MD/25.png", store:"MD Pharmacy", stock: 250, prescription: 'Prescription Needed'},

{name:'Cozaar Lozartan', image:'images/MD/1.png', store:'MD Pharmacy', stock:250, prescription: 'Over-the-counter'},




/** LZ Pharmacy */
 // Naproxen: Over-the-counter
// Folic acid: Prescription Needed
// Ambroxol: Over-the-counter
// Dolfenal: Over-the-counter
// Decolgen: Over-the-counter
// Alaxan FR: Over-the-counter
// Neurogen: Over-the-counter
// Myra-E: Over-the-counter
// Centrum: Over-the-counter
// Enervon: Over-the-counter
// Stresstabs: Over-the-counter
// Aspirin: Over-the-counter
// Fluimusil: Over-the-counter
// Disudrin: Over-the-counter
// Amlodipine: Over-the-counter
// Lomotil: Over-the-counter
// Bonamine: Over-the-counter
// Neobloc: Over-the-counter
// Tuseran: Over-the-counter
// Medicol: Over-the-counter
// Ponstan: Over-the-counter
// Trimetazidine: Prescription Needed
// Clopidogrel: Prescription Needed
// Atorvastatin: Prescription Needed
// Candesartan: Prescription Needed
{name:"Naproxen", image:"images/LZ/1.png", store:"LZ Pharmacy", stock: 11, prescription: 'Over-the-counter'},
{name:"Folic acid", image:"images/LZ/2.png", store:"LZ Pharmacy", stock: 11, prescription: 'Prescription Needed'},
{name:"Ambroxol", image:"images/LZ/3.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},

{name:"Dolfenal", image:"images/LZ/4.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Decolgen", image:"images/LZ/5.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Alaxan FR", image:"images/LZ/6.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Neurogen", image:"images/LZ/7.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Myra-E", image:"images/LZ/8.png", store:"LZ Pharmacy", stock:11, prescription: 'Over-the-counter'},
{name:"Centrum", image:"images/LZ/9.png", store:"LZ Pharmacy", stock:11, prescription: 'Over-the-counter'},
{name:"Enervon", image:"images/LZ/10.png", store:"LZ Pharmacy", stock: 11, prescription: 'Over-the-counter'},
{name:"Stresstabs", image:"images/LZ/11.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Aspirin", image:"images/LZ/12.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Fluimusil", image:"images/LZ/13.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Disudrin", image:"images/LZ/14.png", store:"LZ Pharmacy", stock: 11, prescription: 'Over-the-counter'},
{name:"Amlodipine", image:"images/LZ/15.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Lomotil", image:"images/LZ/16.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Bonamine", image:"images/LZ/17.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Neobloc", image:"images/LZ/18.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Tuseran", image:"images/LZ/19.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Medicol", image:"images/LZ/20.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Ponstan", image:"images/LZ/21.png", store:"LZ Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Trimetazidine", image:"images/LZ/22.png", store:"LZ Pharmacy", stock: 10, prescription: 'Prescription Needed'},  
{name:"Clopidogrel", image:"images/LZ/23.png", store:"LZ Pharmacy", stock: 10, prescription: 'Prescription Needed'},
{name:"Atorvastatin", image:"images/LZ/24.png", store:"LZ Pharmacy", stock: 10, prescription: 'Prescription Needed'},
{name:"Candesartan", image:"images/LZ/25.png", store:"LZ Pharmacy", stock: 10, prescription: 'Prescription Needed'},
// ** CM Pharmacy */


{name:"Naproxen", image:"images/CM/1.png", store:"CM Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Folic acid", image:"images/CM/2.png", store:"CM Pharmacy", stock: 10, prescription: 'Prescription Needed'},
{name:"Ambroxol", image:"images/CM/3.png", store:"CM Pharmacy", stock: 100, prescription: 'Over-the-counter'},
{name:"Dolfenal", image:"images/CM/4.png", store:"CM Pharmacy", stock: 100, prescription: 'Over-the-counter'},
{name:"Decolgen", image:"images/CM/5.png", store:"CM Pharmacy", stock: 103, prescription: 'Over-the-counter'},
{name:"Alaxan FR", image:"images/CM/6.png", store:"CM Pharmacy", stock: 120, prescription: 'Over-the-counter'},
{name:"Neurogen", image:"images/CM/7.png", store:"CM Pharmacy", stock: 103, prescription: 'Over-the-counter'},
{name:"Myra-E", image:"images/CM/8.png", store:"CM Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Centrum", image:"images/CM/9.png", store:"CM Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Enervon", image:"images/CM/10.png", store:"CM Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Stresstabs", image:"images/CM/11.png", store:"CM Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Aspirin", image:"images/CM/12.png", store:"CM Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Fluimusil", image:"images/CM/13.png", store:"CM Pharmacy", stock: 10, prescription: 'Over-the-counter'},
{name:"Disudrin", image:"images/CM/14.png", store:"CM Pharmacy", stock: 102, prescription: 'Over-the-counter'},
{name:"Amlodipine", image:"images/CM/15.png", store:"CM Pharmacy", stock: 120, prescription: 'Over-the-counter'},
{name:"Lomotil", image:"images/CM/16.png", store:"CM Pharmacy", stock: 101, prescription: 'Over-the-counter'},
{name:"Bonamine", image:"images/CM/17.png", store:"CM Pharmacy", stock: 130, prescription: 'Over-the-counter'},
{name:"Neobloc", image:"images/CM/18.png", store:"CM Pharmacy", stock: 130, prescription: 'Over-the-counter'},
{name:"Tuseran", image:"images/CM/19.png", store:"CM Pharmacy", stock: 105, prescription: 'Over-the-counter'},
{name:"Medicol", image:"images/CM/20.png", store:"CM Pharmacy", stock: 103, prescription: 'Over-the-counter'},
{name:"Ponstan", image:"images/CM/21.png", store:"CM Pharmacy", stock: 103, prescription: 'Over-the-counter'},
{name:"Trimetazidine", image:"images/CM/22.png", store:"CM Pharmacy", stock: 102, prescription: 'Prescription Needed'},
{name:"Clopidogrel", image:"images/CM/23.png", store:"CM Pharmacy", stock: 106, prescription: 'Prescription Needed'},
{name:"Atorvastatin", image:"images/CM/24.png", store:"CM Pharmacy", stock: 103, prescription: 'Prescription Needed'},
{name:"Candesartan", image:"images/CM/25.png", store:"CM Pharmacy", stock: 102, prescription: 'Prescription Needed'},

];


  





var DESCRIPTION = {
  /** LZ Pharmacy */
  "Naproxen": {
    "description": "A non-steroidal anti-inflammatory drug used to treat pain and inflammation.",
    "category": [
      "Non-Steroidal Anti-inflammatory"
    ]
  },
  "Folic acid": {
    "description": "A vitamin used to prevent and treat folic acid deficiency and certain types of anemia.",
    "category": [
      "Vitamins"
    ]
  },
  "Ambroxol": {
    "description": "A mucolytic agent used in the treatment of respiratory disorders associated with viscid or excessive mucus.",
    "category": [
      "Mucolytics"
    ]
  },
  "Dolfenal": {
    "description": "A non-steroidal anti-inflammatory drug used to relieve pain and inflammation.",
    "category": [
      "Non-Steroidal Anti-inflammatory"
    ]
  },
  "Decolgen": {
    "description": "An antihistamine used to relieve symptoms of allergy, cold, and flu.",
    "category": [
      "Antihistamines",
      
    ]
  },
  "Alaxan FR": {
    "description": "A non-steroidal anti-inflammatory drug used for pain relief and reduction of fever.",
    "category": [
      "Non-Steroidal Anti-inflammatory"
    ]
  },
  "Neurogen": {
    "description": "A vitamin supplement used to maintain good health and prevent vitamin deficiency.",
    "category": [
      "Vitamins"
    ]
  },
  "Myra-E": {
    "description": "A vitamin supplement used to maintain healthy skin and prevent vitamin E deficiency.",
    "category": [
      "Vitamins"
    ]
  },
  "Centrum": {
    "description": "A multivitamin used to prevent and treat vitamin deficiency.",
    "category": [
      "Multivitamins"
    ]
  },
  "Enervon": {
    "description": "A multivitamin supplement used to maintain good health and prevent vitamin deficiency.",
    "category": [
      "Multivitamins"
    ]
  },
  "Stresstabs": {
    "description": "A multivitamin supplement used to maintain good health and prevent vitamin deficiency.",
    "category": [
      "Multivitamins"
    ]
  },
  "Aspirin": {
    "description": "A medication used to reduce fever, pain, and inflammation.",
    "category": [
      "Antithrombotics"
    ]
  },
  "Fluimusil": {
    "description": "A mucolytic agent used to treat respiratory disorders associated with viscid or excessive mucus.",
    "category": [
      "Mucolytics"
    ]
  },
  "Disudrin": {
    "description": "An antihistamine used to relieve symptoms of allergy, cold, and flu.",
    "category": [
      "Antihistamines"
    ]
  },
  "Amlodipine": {
    "description": "A calcium channel blocker used to treat high blood pressure and chest pain.",
    "category": [
      "Calcium Channel Blockers"
    ]
  },
  "Lomotil": {
    "description": "An anti-diarrheal medication used to treat diarrhea.",
    "category": [
      "Anti-motility"
    ]
  },
  "Bonamine": {
    "description": "A medication used to relieve symptoms of vertigo and motion sickness.",
    "category": [
      "Anti-emetics/Anti-vertigo"
    ]
  },
  "Neobloc": {
    "description": "A beta adrenoceptor blocker used to treat hypertension, angina, and heart failure.",
    "category": [
      "Beta Adrenoceptor Blockers",
      
    ]
  },
  "Tuseran": {
    "description": "An antitussive medication used to relieve cough.",
    "category": [
      "Antitussives"
    ]
  },
  "Medicol": {
    "description": "An antipyretic medication used to reduce fever and relieve pain.",
    "category": [
      "Antipyretics"
    ]
  },
  "Ponstan": {
    "description": "An analgesic medication used to relieve pain and inflammation.",
    "category": [
      "Analgesics"
    ]
  },
  "Trimetazidine": {
    "description": "An anti-angina medication used to treat angina pectoris.",
    "category": [
      "Anti-Angina"
    ]
  },
  "Clopidogrel": {
    "description": "An antithrombotic medication used to reduce the risk of heart attack and stroke.",
    "category": [
      "Antithrombotics"
    ]
  },
  "Atorvastatin": {
    "description": "A lipid-modifying agent used to treat high cholesterol levels and reduce the risk of heart attack and stroke.",
    "category": [
      "Lipid Modifying Agents"
    ]
  },
  "Candesartan": {
    "description": "An antihypertensive medication used to treat high blood pressure and heart failure.",
    "category": [
      "Antihypertensives"
    ]
  },

  /** CM Pharmacy */

  
    "Cetirizine": {
    "description": "An antihistamine used to relieve symptoms of allergies such as runny nose, sneezing, and itchy/watery eyes.",
    "category": [
    "Antihistamines"
    ]
    },
    "Azithromycin": {
    "description": "An antibiotic used to treat a variety of bacterial infections including respiratory infections, skin infections, and sexually transmitted diseases.",
    "category": [
    "Antibacterials"
    ]
    },
    "Glyxambi": {
    "description": "An antidiabetic medication used to treat type 2 diabetes by controlling blood sugar levels.",
    "category": [
    "Antidiabetics"
    ]
    },
    "Biogesic": {
    "description": "An analgesic/antipyretic used to relieve mild to moderate pain and reduce fever.",
    "category": [
    "Analgesics/Antipyretics"
    ]
    },
    "Bioflu": {
    "description": "A combination of antihistamine and antipyretic used to relieve symptoms of colds and flu such as coughing, sneezing, runny nose, and fever.",
    "category": [
    "Antihistamines/Antipyretics"
    ]
    },
    "Advil Liquid Gel Capsule": {
    "description": "An analgesic/antipyretic used to relieve pain and reduce fever.",
    "category": [
    "Analgesics/Antipyretics"
    ]
    },
    "Advil Liquid Gel": {
      "description": "An analgesic/antipyretic used to relieve pain and reduce fever.",
      "category": [
      "Analgesics/Antipyretics"
      ]
      },
    "Diamicron MR": {
    "description": "An antidiabetic medication used to control blood sugar levels in patients with type 2 diabetes.",
    "category": [
    "Antidiabetics"
    ]
    },
    "Calpol": {
    "description": "An analgesic/antipyretic used to relieve pain and reduce fever in children.",
    "category": [
    "Analgesics/Antipyretics"
    ]
    },
    "Glucotin": {
    "description": "An oral hypoglycemic medication used to lower blood sugar levels in patients with type 2 diabetes.",
    "category": [
    "Oral Hypoglycemics"
    ]
    },
    "Saphormin": {
    "description": "An oral hypoglycemic medication used to control blood sugar levels in patients with type 2 diabetes.",
    "category": [
    "Oral Hypoglycemics"
    ]
    },
    "Dolfenal": {
    "description": "A non-steroidal anti-inflammatory drug (NSAID) used to relieve pain and inflammation.",
    "category": [
    "Non-Steroidal Anti-inflammatory"
    ]
    },
    "Aspilets": {
    "description": "An antithrombotic medication used to prevent blood clots.",
    "category": [
    "Antithrombotics"
    ]
    },
    "ImmunPro": {
    "description": "A vitamin supplement used to support the immune system.",
    "category": [
    "Vitamins"
    ]
    },
    "Fern-C": {
    "description": "A vitamin supplement used to prevent or treat vitamin C deficiency.",
    "category": [
    "Vitamins"
    ]
    },
    "Sleepwell": {
    "description": "A food supplement used to promote better sleep.",
    "category": [
    "Food Supplements"
    ]
    },
    
      "Bonamine": {
      "description": "Used for the prevention and treatment of nausea, vomiting, and dizziness associated with motion sickness and vertigo.",
      "category": ["Anti-emetics","Anti-vertigo"]
      },
      "Mefenamic Acid": {
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used for the relief of mild to moderate pain.",
      "category": ["Non-Steroidal Anti-inflammatory"]
      },
      "Centrum Advance": {
      "description": "A multivitamin/multimineral supplement used for the prevention and treatment of vitamin and mineral deficiencies.",
      "category": ["Multivitamins"]
      },
      "Kremil-S Chewable": {
      "description": "An antacid/antiflatulent used for the relief of hyperacidity, dyspepsia, and gas pains.",
      "category": ["Antacids/Antiflatulents"]
      },
      "Tempra Forte": {
      "description": "An analgesic/antipyretic used for the relief of mild to moderate pain and fever.",
      "category": ["Analgesics", "Antipyretics"]
      },
      "Conzace Softgel": {
      "description": "A multivitamin/multimineral supplement used for the prevention and treatment of vitamin and mineral deficiencies.",
      "category": ["Multivitamins"]
      },
      "Clusivol Plus": {
      "description": "A multivitamin/multimineral supplement used for the prevention and treatment of vitamin and mineral deficiencies.",
      "category": ["Multivitamins"]
      },
      "Ascorbic Acid Vitamin": {
      "description": "A vitamin supplement used to prevent and treat vitamin C deficiency.",
      "category": ["Vitamins"]
      },
      "Cefalexin": {
      "description": "An antibiotic used for the treatment of bacterial infections such as respiratory tract infections, skin and soft tissue infections, and urinary tract infections.",
      "category": ["Antibacterials"]
      },
      "Allerkid": {
      "description": "An antihistamine used for the relief of symptoms associated with allergic rhinitis, such as sneezing, runny nose, and itching.",
      "category": ["Antihistamines"]
      },

      // TJ Pharmacy
      "Biogesic": {
        "description": "Analgesic and antipyretic medication commonly used for relief of fever, headaches, and other minor aches and pains.",
        "category": ["Analgesics/Antipyretics"]
        },
        "Paracetamol": {
        "description": "Commonly used analgesic and antipyretic medication for mild to moderate pain and fever.",
        "category": ["Analgesics/Antipyretics"]
        },
        "Neozep": {
        "description": "Combination medication containing antihistamine and analgesic ingredients, used for relief of cold and flu symptoms such as fever, nasal congestion, and headache.",
        "category": ["Antihistamines/Antipyretics"]
        },
        "Bioflu": {
        "description": "Combination medication containing antihistamine and analgesic ingredients, used for relief of cold and flu symptoms such as fever, cough, and runny nose.",
        "category": ["Antihistamines/Antipyretics"]
        },
        "Amoxicillin": {
        "description": "Broad-spectrum antibiotic used to treat bacterial infections such as pneumonia, bronchitis, and urinary tract infections.",
        "category": ["Antibacterials"]
        },
        "Diatabs": {
        "description": "Anti-motility medication used to relieve diarrhea and other symptoms associated with gastrointestinal upset.",
        "category": ["Anti-motility"]
        },
        "Colchicine": {
        "description": "Medication used for the treatment of acute gout attacks and to prevent gout attacks in patients with recurrent gout.",
        "category": ["Anti-gout"]
        },
        "Flanax": {
        "description": "Nonsteroidal anti-inflammatory medication used for the relief of pain and inflammation associated with conditions such as osteoarthritis, rheumatoid arthritis, and menstrual cramps.",
        "category": ["Non-Steroidal Anti-inflammatory", "Analgesics"]
        },
        "Rexidol": {
        "description": "Analgesic and antipyretic medication used for the relief of mild to moderate pain and fever.",
        "category": ["Analgesics/Antipyretics"]
        },
        "Alaxan FR": {
        "description": "Combination medication containing ibuprofen and paracetamol, used for relief of pain and fever.",
        "category": ["Non-Steroidal Anti-inflammatory", "Analgesics/Antipyretics"]
        },
        "Metformin": {
        "description": "Oral hypoglycemic medication used for the treatment of type 2 diabetes mellitus.",
        "category": ["Oral Hypoglycemics"]
        },

        "Robitussin": {
          "description": "Medication used to treat cough and chest congestion by thinning mucus and making it easier to cough up.",
          "category": ["Antitussives","Expectorants"]
          },
          "Solmux": {
          "description": "Mucolytic medication used to treat cough and loosen phlegm or mucus in the airways to make it easier to cough up.",
          "category": ["Mucolytics"]
          },
          "Decolgen": {
          "description": "Medication used to treat symptoms of the common cold, flu, and allergies such as runny nose, sneezing, itchy and watery eyes, and other respiratory symptoms.",
          "category": ["Antihistamines"]
          },
          "Calciumade": {
          "description": "A dietary supplement that provides calcium and vitamin D to support strong bones and teeth, as well as vitamin C for immune system support.",
          "category": ["Vitamins/Minerals"]
          },
          "Potencee": {
          "description": "A dietary supplement that provides a high dose of vitamin C to support a healthy immune system and overall health.",
          "category": ["Vitamins"]
          },
          "Kremil-S": {
          "description": "Antacid medication used to relieve heartburn, indigestion, and stomach upset caused by excess stomach acid, as well as to reduce bloating and gas.",
          "category": ["Antacids/Antiflatulents"]
          },
          "Lomotil": {
          "description": "Anti-motility medication used to treat diarrhea by slowing down the movement of the gut and reducing bowel movements.",
          "category": ["Anti-motility"]
          },
          "Tempra": {
          "description": "Analgesic and antipyretic medication used to relieve mild to moderate pain and fever, such as headaches, toothaches, menstrual cramps, and other minor aches and pains.",
          "category": ["Analgesics/Antipyretics"]
          },
          "Plemex Forte": {
          "description": "Cough suppressant medication used to treat cough caused by respiratory tract infections, asthma, or other respiratory conditions.",
          "category": ["Anti-cough","Anti-asthma"]
          },
          "Gingko Biloba": {
          "description": "Herbal supplement derived from the leaves of the gingko tree, used to improve memory, concentration, and overall cognitive function, as well as to reduce symptoms of anxiety and depression.",
          "category": ["Food Supplements"]
          },
          "Azithromycin": {
          "description": "Antibiotic medication used to treat a wide range of bacterial infections, such as respiratory tract infections, skin infections, and sexually transmitted infections.",
          "category": ["Antibacterials"]
          },
          "Basagine Insulin": {
          "description": "Medication used to treat diabetes by regulating blood sugar levels and reducing the risk of complications such as nerve damage, kidney damage, and blindness.",
          "category": ["Antidiabetics"]
          },
          "ASCOF Forte": {
          "description": "Herbal cough remedy made from Lagundi leaves, used to treat cough caused by respiratory tract infections, asthma, or other respiratory conditions.",
          "category": ["Cough Remedy"]
          },

          // MD Pharmacy
          "Cozaar Lozartan": {
            "description": "Angiotensin receptor blocker used for the treatment of hypertension and to reduce the risk of stroke in patients with hypertension and left ventricular hypertrophy.",
            "category": ["Angiotensin"]
            },
            "Trivastal Retard": {
            "description": "Dopamine receptor agonist used to treat symptoms of Parkinson's disease and restless legs syndrome.",
            "category": ["Dopamine Receptor Agonists"]
            },
            "Sertralinehydrichloride": {
            "description": "Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder (OCD), panic disorder, and post-traumatic stress disorder (PTSD).",
            "category": ["Antidepressants"]
            },
            "Levodopa Carbidopa": {
            "description": "Combination of levodopa and carbidopa used to treat symptoms of Parkinson's disease.",
            "category": ["Antiparkinsonism"]
            },
            "Clozapine": {
            "description": "Atypical antipsychotic used to treat schizophrenia in patients who have not responded to other antipsychotic medications.",
            "category": ["Antipsychotic"]
            },
            "Mirtazapine": {
            "description": "Antidepressant used to treat major depressive disorder and anxiety disorders.",
            "category": ["Antidepressants"]
            },
            "Tazocin": {
            "description": "Combination of piperacillin and tazobactam used to treat severe bacterial infections.",
            "category": ["Antibiotics"]
            },
            "Viortoxetine": {
            "description": "Serotonin-norepinephrine reuptake inhibitor (SNRI) antidepressant used to treat major depressive disorder and anxiety disorders.",
            "category": ["Antidepressants"]
            },
            "Isotretenion": {
            "description": "Retinoid medication used to treat severe acne that has not responded to other treatments.",
            "category": ["Anti-motility"]
            },
            "Ropinirole": {
            "description": "Dopamine agonist used to treat symptoms of Parkinson's disease and restless legs syndrome.",
            "category": ["Antidepressants"]
            },
            "Aripiprazole": {
            "description": "Atypical antipsychotic used to treat schizophrenia, bipolar disorder, and major depressive disorder.",
            "category": ["Antipsychotics"]
            },
            "Amiodarone": {
            "description": "Antiarrhythmic medication used to treat and prevent certain types of irregular heartbeats.",
            "category": ["Antirhythmics"]
            },
            
            "Bromocriptine": {
              "description": "Dopamine receptor agonist commonly used to treat Parkinson's disease and hyperprolactinemia.",
              "category": ["Dopamine Receptor Agonists"]
              },
              "Escitalopram": {
              "description": "Antidepressant medication used to treat depression, anxiety disorders, and OCD.",
              "category": ["Antidepressants"]
              },
              "Bonamine": {
              "description": "Medication used to treat motion sickness, vertigo, and nausea.",
              "category": ["Anti-emetics","Anti-vertigo"]
              },
              "Desvenlafaxine": {
              "description": "Antidepressant medication used to treat major depressive disorder.",
              "category": ["Antidepressants"]
              },
              "Alendronate": {
              "description": "Bisphosphonate medication used to prevent and treat osteoporosis and other bone conditions.",
              "category": ["Bisphosphonates"]
              },
              "Acyclovir": {
              "description": "Antiviral medication used to treat cold sores and genital herpes.",
              "category": ["Cold Sores"]
              },
              "Albuterol": {
              "description": "Bronchodilator medication used to treat asthma, chronic obstructive pulmonary disease (COPD), and other respiratory conditions.",
              "category": ["Inhalation Solution"]
              },
              "Alfuzosin": {
              "description": "Medication used to treat symptoms of benign prostatic hyperplasia (BPH) such as difficulty urinating and frequent urination.",
              "category": ["Adrenergic Blocking Agents"]
              },
              "Olanzapine": {
              "description": "Antipsychotic medication used to treat schizophrenia and bipolar disorder.",
              "category": ["Antipsychotics"]
              },
              "Risperidone": {
              "description": "Antipsychotic medication used to treat schizophrenia, bipolar disorder, and irritability associated with autism.",
              "category": ["Antipsychotics"]
              },
              "Amoxicillin": {
              "description": "Antibiotic medication used to treat bacterial infections.",
              "category": ["Antibiotics"]
              },
              "Carmellose": {
              "description": "Eyedrops used to treat dry eyes and other eye conditions.",
              "category": ["Eyedrops"]
              },
              "Basagine": {
              "description": "Medication used to treat type 2 diabetes.",
              "category": ["Antidiabetics"]
              }
              


          
          
          
          
          


        
      

    
    
        


      
}

