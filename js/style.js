var pizzaItem;
// The jQuery
$(document).ready(function(){
  $("#formTag").submit(function(event){
    event.preventDefault();
    $("#show-Bill").show();
    var inputtedName = $("#name").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    var toppingArray = [];
    $("input:checkbox[name=cheese]:checked").each(function(){
     var inputtedToppings = $(this).val();
     toppingArray.push(inputtedToppings);
     $(".checkToppings").text(inputtedToppings + ",");
   });

   var inputtedSize =$("input:radio[name=sizePizza]:checked").val();
   $("..checkName").text(inputtedName);
   $(".checkSize").text(inputtedSize);

   pizzaItem = new pizzaToa(toppingArray,inputtedSize);

   var toppingBasedAmt = pizzaItem.toppingsBasedAmount();
   var sizeBasedAmt = pizzaItem.sizeBasedAmount();
   pizzaItem.calculateCost(toppingBasedAmt, sizeBasedAmt);
  });
});

function pizzaToa(toppings, size){
  this.toppings = toppings,
  this.size = size
}

pizzaToa.prototype.toppingsBasedAmount = function(){
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

pizzaToa.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt){
  var totalCost =tBasedAmt +sizeBasedAmt;
  $(".displayTotalCost").html(totalCost);
}
