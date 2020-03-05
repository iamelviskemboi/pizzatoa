// The main function
function pizzaToa(toppings, size, crust){
  this.toppings = toppings,
  this.size = size,
  this.crust = crust
}

// The Toppings price calculator
pizzaToa.prototype.toppingAmount = function(){
  if(this.toppings.length != 0){
    var toppingPrice = this.toppings.length * 3;
    return toppingPrice;
  }
  else {
    alert("You can't leave blanks! Choose your toppings.")
  }
}

// The Size price calculator
pizzaToa.prototype.userSizedAmount = function(){
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

// The Crust price calculator
pizzaToa.prototype.userCrustAmount = function(){
  if (this.crust === "Crispy"){
    return 14;
  }
  else if(this.crust === "Stuffed"){
    return 6;
  }
  else if(this.crust === "Glutten-free"){
    return 2;
  }
  else {
    alert ("You can't leave blanks! Pick your crust please.");
  }
}

// The TOTAL price calculator
pizzaToa.prototype.calculateCost = function(toppingsAmount, userSizeAmount, userCrustAmount){
  var totalCost = toppingsAmount + userSizeAmount + userCrustAmount;
  $("#displayTotalCost").html(totalCost);
}

var pizzaItem;

// The jQuery form
$(document).ready(function(){
  $("#formTag").submit(function(event){
    event.preventDefault();

    $("#checkout-show").show();
    var inputtedName = $("#name").val();
    var userEmail = $("#email").val();
    var cheeseArray = [];
    var inputtedNoToppings = parseInt($("#noToppings").val());

    $("input:checkbox[name=toppcheck]:checked").each(function(){
      var inputtedToppings = $(this).val();
      cheeseArray.push(inputtedToppings);
      $("#checkToppings").text(inputtedToppings + ', ');
    });

    var userCrust = $("input:radio[name=sizePizza]:checked").val();
    var userSize = $("input:radio[name=sizeCrust]:checked").val();
    $("#checkName").text(inputtedName);
    $("#checkEmail").text(userEmail);
    $("#checkSize").text(userSize);
    $("#checkCrust").text(userCrust);

    pizzaItem = new pizzaToa(cheeseArray, sizePizza, sizeCrust);

    var toppingOrientAmount = pizzaItem.topppingAmount();
    var userSizeAmount = pizzaItem.userSizeAmount();
    var userCrustAmount = pizzaItem.userCrustAmount();
    pizzaItem.calculateCost(toppingOrientAmount, userSizeAmount, userCrustAmount);
  });
});
