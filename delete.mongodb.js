use ('ecm');

//db.ord.deleteMany({status:"Delivered"});

db.prd.deleteMany({price : {$lte:20}})
