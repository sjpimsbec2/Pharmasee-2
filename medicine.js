var listOfMedicines = [
  {name:"Cetirizine",image:"images/DC/1.png", store:"DC Pharmacy", modal:"images/1sample.png",
description: "Cetirizine is an antihistamine used to treat allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching. It is also used to treat chronic idiopathic urticaria and chronic spontaneous urticaria in adults and children who are at least 6 months old. It is taken by mouth. Common side effects include sleepiness, dry mouth, and headache. It is unclear if it is safe during pregnancy or breastfeeding. It is a second-generation antihistamine and works by blocking histamine receptors. It is a racemic mixture of two enantiomers, R- and S-cetirizine. The R-enantiomer is the active form. It was patented in 1989 and came into medical use in 1996. It is on the World Health Organization's List of Essential Medicines, the most effective and safe medicines needed in a health system. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."}, 
  {name:"Azithromycin",image:"images/DC/2.png", store:"DC Pharmacy", description:
"Azithromycin is an antibiotic used for the treatment of a number of bacterial infections. This includes middle ear infections, strep throat, pneumonia, traveler's diarrhea, and certain other intestinal infections. It may also be used for a number of sexually transmitted infections. It is taken by mouth. Common side effects include vomiting, diarrhea, and headache. Serious side effects may include liver problems. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the macrolide class of antibiotics. It works by stopping the growth of bacteria. It is the most commonly prescribed antibiotic in the United States. It is available as a generic medication. The wholesale cost in the developing world is about 0.40 to 0.50 USD per dose as of 2014. In the United States it costs about 1.50 USD per dose."},
  {name:"Glyxambi",image:"images/DC/3.png", store:"DC Pharmacy", description:"Glyxambi is a combination of alogliptin and metformin used to treat type 2 diabetes. It is taken by mouth. Common side effects include nausea, vomiting, and diarrhea. Serious side effects may include pancreatitis. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the dipeptidyl peptidase-4 inhibitor and biguanide classes of medications. It works by increasing the amount of insulin released by the pancreas and decreasing the amount of glucose absorbed by the intestines. It was approved for medical use in the United States in 2015. The wholesale cost in the developing world is about 0.50 to 0.60 USD per dose as of 2014. In the United States it costs about 2.00 USD per dose."},
  {name:"Biogesic",image:"images/DC/4.png", store:"DC Pharmacy", description: "Biogesic is a combination of paracetamol and caffeine used to treat pain and fever. It is taken by mouth. Common side effects include nausea, vomiting, and headache. Serious side effects may include liver problems. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the paracetamol and caffeine classes of medications. It works by blocking the production of prostaglandins. It was approved for medical use in the United States in 1957. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."},
  {name:"Bioflu",image:"images/DC/5.png", store:"DC Pharmacy", description:"Bioflu is a combination of paracetamol, phenylephrine, and caffeine used to treat pain and fever. It is taken by mouth. Common side effects include nausea, vomiting, and headache. Serious side effects may include liver problems. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the paracetamol, phenylephrine, and caffeine classes of medications. It works by blocking the production of prostaglandins and increasing blood pressure. It was approved for medical use in the United States in 1957. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."},
  {name:"Advil Liquid Gel Capsule",image:"images/DC/6.png", store:"DC Pharmacy", description:"Advil is a brand name of ibuprofen, a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, fever, and inflammation. It is taken by mouth. Common side effects include nausea, vomiting, and headache. Serious side effects may include liver problems. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the propionic acid class of medications. It works by blocking the production of prostaglandins. It was approved for medical use in the United States in 1974. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."},
  {name:"Diamicron MR",image:"images/DC/7.png", store:"DC Pharmacy", description:"Diamicron MR is a brand name of glyburide, a sulfonylurea used to treat type 2 diabetes. It is taken by mouth. Common side effects include nausea, vomiting, and diarrhea. Serious side effects may include pancreatitis. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the sulfonylurea class of medications. It works by increasing the amount of insulin released by the pancreas. It was approved for medical use in the United States in 1985. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."},
  {name:"Calpol",image:"images/DC/8.png", store:"DC Pharmacy",
description:"Calpol is a brand name of paracetamol, a pain and fever medication. It is taken by mouth. Common side effects include nausea, vomiting, and headache. Serious side effects may include liver problems. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the paracetamol class of medications. It works by blocking the production of prostaglandins. It was approved for medical use in the United States in 1957. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."},
  {name:"Glucotin",image:"images/DC/9.png", store:"DC Pharmacy", description: "Glucotin is a brand name of glipizide, a sulfonylurea used to treat type 2 diabetes. It is taken by mouth. Common side effects include nausea, vomiting, and diarrhea. Serious side effects may include pancreatitis. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the sulfonylurea class of medications. It works by increasing the amount of insulin released by the pancreas. It was approved for medical use in the United States in 1985. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."},
  {name:"Saphormin",image:"images/DC/10.png", store:"DC Pharmacy", description: "Saphormin is a brand name of glimepiride, a sulfonylurea used to treat type 2 diabetes. It is taken by mouth. Common side effects include nausea, vomiting, and diarrhea. Serious side effects may include pancreatitis. It is not recommended in those with kidney problems. It is not recommended during pregnancy or breastfeeding. It is in the sulfonylurea class of medications. It works by increasing the amount of insulin released by the pancreas. It was approved for medical use in the United States in 1985. The wholesale cost in the developing world is about 0.01 to 0.02 USD per dose as of 2014. In the United States it costs about 0.50 USD per dose."},
  {name:"Dolfenal",image:"images/DC/11.png", store:"DC Pharmacy"},
  {name:"Aspilets",image:"images/DC/12.png", store:"DC Pharmacy"},
  {name:"ImmunPro",image:"images/DC/13.png", store:"DC Pharmacy"},
  {name:"Fern-C",image:"images/DC/14.png", store:"DC Pharmacy"},
  {name:"Sleepwell",image:"images/DC/15.png", store:"DC Pharmacy"},
  {name:"Bonamine",image:"images/DC/16.png", store:"DC Pharmacy"},
  {name:"Mefenamic Acid",image:"images/DC/17.png", store:"DC Pharmacy"},
  {name:"Centrum Advance",image:"images/DC/18.png", store:"DC Pharmacy"},
  {name:"Kremil-S Chewable",image:"images/DC/19.png", store:"DC Pharmacy"},
  // TODO: other medicine store is CM Pharmacy
  {name:"Naproxen", image:"images/CM/1.png", store:"CM Pharmacy"},
  {name:"Folic Acid", image:"images/CM/2.png", store:"CM Pharmacy"},
  {name:"Ambroxol", image:"images/CM/3.png", store:"CM Pharmacy"},
  {name:"Dolfenal", image:"images/CM/4.png", store:"CM Pharmacy"},
  {name:"Decolgen", image:"images/CM/5.png", store:"CM Pharmacy"},
  {name:"Alaxan", image:"images/CM/6.png", store:"CM Pharmacy"},
  {name:"Neurogen", image:"images/CM/7.png", store:"CM Pharmacy"},
  {name:"Myra-E", image:"images/CM/8.png", store:"CM Pharmacy"},
  {name:"Centrum Tablet", image:"images/CM/9.png", store:"CM Pharmacy"},
  {name:"Enervon 50 mg tablet", image:"images/CM/10.png", store:"CM Pharmacy"},
  // TODO: other medicine store is TJ Pharmacy
  {name:"Biogesic", image:"images/TJ/1.png", store:"TJ Pharmacy"},
  {name:"PHILRX Philparamine", image:"images/TJ/2.png", store:"TJ Pharmacy"},
  {name:"NELPA Parasaph Analgesic", image:"images/TJ/3.png", store:"TJ Pharmacy"},
  {name:"Neozep Forte", image:"images/TJ/4.png", store:"TJ Pharmacy"},
  {name:"Bioflu", image:"images/TJ/5.png", store:"TJ Pharmacy"},
  {name:"Ritemed Amoxicillin Capsule", image:"images/TJ/6.png", store:"TJ Pharmacy"},
  {name:"Diatabs Loperamide Capsule", image:"images/TJ/7.png", store:"TJ Pharmacy"},
  {name:"RHEA Colchicine Tablet", image:"images/TJ/8.png", store:"TJ Pharmacy"},
  {name:"FLANAX Naproxen Sodium Tablet", image:"images/TJ/9.png", store:"TJ Pharmacy"},
  {name:"Rexidol Forte Paracetamol Caffeine Tablet", image:"images/TJ/10.png", store:"TJ Pharmacy"},
  // TODO: other medicine store is MD Pharmacy
  {name:"Cozaar Losartan Potassium Tablet", image:"images/MD/1.png", store:"MD Pharmacy"},
  {name:"Trivastal Retard", image:"images/MD/2.png", store:"MD Pharmacy"},
  {name:'Setralinehydrochloride',  image:"images/MD/3.png", store:"MD Pharmacy"},
  {name: 'Carbidopa-Levodopa',  image:"images/MD/4.png", store:"MD Pharmacy"},
  {name: 'Clozapine',  image:"images/MD/5.png", store:"MD Pharmacy"},
  {name: 'Mirtazapine tablet',  image:"images/MD/6.png", store:"MD Pharmacy"},
  {name: 'Tazocin Piperacillin',  image:"images/MD/7.png", store:"MD Pharmacy"},
  {name: 'Vortioxetine tablet film coated tablet',  image:"images/MD/8.png", store:"MD Pharmacy"},
  {name: 'Isotretinoin',  image:"images/MD/9.png", store:"MD Pharmacy"},
  {name: 'Ropinirole',  image:"images/MD/10.png", store:"MD Pharmacy"},
  
    // LZ Pharmacy
  {name:'Naproxen',  image:"images/LZ/1.png", store:"LZ Pharmacy"},
  {name:'Folic Acid tablet',  image:"images/LZ/2.png", store:"LZ Pharmacy"},
  {name:'Ambroxol',  image:"images/LZ/3.png", store:"LZ Pharmacy"},
  {name:'Dolfenal',  image:"images/LZ/4.png", store:"LZ Pharmacy"},
  {name:'Decolgen',  image:"images/LZ/5.png", store:"LZ Pharmacy"},
  {name:'Alaxan',  image:"images/LZ/6.png", store:"LZ Pharmacy"},
  {name:'Neurogen E',  image:"images/LZ/7.png", store:"LZ Pharmacy"},
  {name:'Myra-E',  image:"images/LZ/8.png", store:"LZ Pharmacy"},
  {name:'Centrum Tablet',  image:"images/LZ/9.png", store:"LZ Pharmacy"},
  {name:'Enervon (Adult)',  image:"images/LZ/10.png", store:"LZ Pharmacy"},
  {name:'Stresstab',  image:"images/LZ/11.png", store:"LZ Pharmacy"},

  // DL Pharmacy
  {name:'Cetirizine',  image:"images/DL/1.png", store:"DL Pharmacy"},
  {name:'Azithromycin',  image:"images/DL/2.png", store:"DL Pharmacy"},
  {name:'Glyxambi',  image:"images/DL/3.png", store:"DL Pharmacy"},
  {name:'Biogesic',  image:"images/DL/4.png", store:"DL Pharmacy"},
  {name: 'Bioflu',  image:"images/DL/5.png", store:"DL Pharmacy"},
  {name:'Advil',  image:"images/DL/6.png", store:"DL Pharmacy"},
  {name:'Diomicron',  image:"images/DL/7.png", store:"DL Pharmacy"},
  {name:'Calpol',  image:"images/DL/8.png", store:"DL Pharmacy"},
{name:'Glucotine',  image:"images/DL/9.png", store:"DL Pharmacy"},
{name:'Saphormin',  image:"images/DL/10.png", store:"DL Pharmacy"},










];
