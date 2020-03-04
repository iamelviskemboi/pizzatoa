// The main function
function pizzaToa(toppings, size, crust){
  this.toppings = toppings,
  this.size = size,
  this.crust = crust
}


pizzaToa.prototype.toppingAmount = function(){
  if(this.toppings.length != 0){
    var toppingPrice = this.toppings.length *3;
    return toppingPrice;
  }
  else {
    alert("You can't leave blanks! Choose your toppings.")
  }
}

pizzaToa.prototype.sizeBasedAmount = function(){
  if (this.size === "Small"){
    return 2;
  }
  else if(this.size === "Medium"){
    return 4;
  }
  else if(this.size === "Large"){
    return 8;
  }
  else {
    alert ("You can't leave blanks! Pick your size.");
  }
}

pizzaToa.prototype.calculateCost = function(toppingsAmount, userSizeAmount){
  var totalCost =toppingsAmount + userSizeAmount;
  $("#displayTotalCost").html(totalCost);
}
var pizzaItem;

// The jQuery form
$(document).ready(function(){
  $("#formTag").submit(function(event){
    event.preventDefault();
    $("#checkout-show").show();
    var inputtedName = $("#name").val();
    var inputtedEmail = $("#email").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    var toppingArray = [];
    $("input:checkbox[name=cheese]:checked").each(function(){
      var inputtedToppings = $(this).val();
      toppingArray.push(inputtedToppings);
      $("#checkToppings").text(inputtedToppings + ",");
    });

    var userSize =$("input:radio[name=sizePizza]:checked").val();
    $("#checkName").text(inputtedName);
    $("#checkEmail").text(userEmail);
    $("#checkSize").text(userSize);

    pizzaItem = new pizzaToa(toppingArray,userSize, userEmail);

    var toppingOrientAmount = pizzaItem.topppingAmount();
    var userSizeAmount = pizzaItem.userSizeAmount();
    pizzaItem.calculateCost(toppingOrientAmount, userSizeAmount);
  });
});
