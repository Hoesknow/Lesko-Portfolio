var item1 = {name:"Cerial", price:"2.99"};
var item2 = {name:"Milk", price:"2.49"};
var item3 = {name:"Grumpy Cat", price:"0.00"};
var total = 0;

var groceries = [
{name:"Cerial", price:2.99},
{name:"Milk", price:2.49},
{name:"Grumpy Cat", price:0.00}
];

for (var i = 0; i < groceries.length; i++) {
              total = total + groceries[i].price;
            }
    


for(var i=0;i<groceries.length; i++){
console.log(groceries[i].name + " be like $" + groceries[i].price );

}
 
console.log('total be like = $'+ total)