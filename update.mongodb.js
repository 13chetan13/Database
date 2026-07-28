use ('ecm');
/*
db.prd.updateOne(
	{category:"Electronics"}, 
	{$inc: {price:100}},
	{$set : {stock:80}}
); 
*/
db.prd.updateMany(
	{category:"Electronics"}, 
	{$set : {stock:80}}
); 
