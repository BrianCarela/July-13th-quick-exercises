
var subtotal = 0;
var tax = 0;
var total = 0;
var items = 0;

input = () => {
  var continuee = confirm('Do you want to keep buying? \n(hit cancel to checkout your items)');
  if(continuee){
    items++
    var itemCost = prompt(`Enter the price of item ${items}`);
    var itemAmount = prompt(`Enter the quantity of item ${items}`);
    errorCheck(itemCost, itemAmount);
  } else if(!continuee){
    checkout();
  }
};

errorCheck = (iC, iA) => {
  console.log(parseInt(iC));
  if(isNaN(parseInt(iC)) || iC === null){
    alert('ERROR: non numerical value entered');
  } else if(isNaN(parseInt(iA)) || iA === null){
    alert('ERROR: non numerical value entered');
  } else{
    processInputs(iC, iA);
    input();
  }
};

processInputs = (cost, quant) => {
  var subSubTotal = parseInt(cost)*parseInt(quant);
  subtotal += subSubTotal;
};

checkout = () => {
  tax += Math.round((subtotal*0.055) * 100) / 100;
  total += (subtotal+tax);
  alert(`Subtotal: $${subtotal} \n
         Tax: $${tax} \n
         Total: $${total}`);
};

// begins the self checkout
input();
