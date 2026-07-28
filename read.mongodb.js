use ('ecm');

//db.prd.find({category:"Home"});

//gt , lt, gte, lte

//db.prd.find({price:{$lte : 20}});

//2 cond

//db.prd.find({$and:[{category:"Home"},{price:{$lt:20}}]});

//to control what to print

//db.prd.find({price:{$lte : 20}},{_id : 0,name:1,stock:1});

//sort

//db.prd.find({price:{$lte : 20}}).sort({price:1});

//printing only set amount and skipping 

db.prd.find({price:{$gte : 0}},{_id : 0,name:1,stock:1,price:1}).sort({price:-1}).limit(4).skip(2);