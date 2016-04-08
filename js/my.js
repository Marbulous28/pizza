//UI Logic

$(document).ready(function() {


  $("#add-toppings").click(function() {
    $(".new-toppings").append('<div class="new-topping")' +
                                '<fieldset class="form-group"> ' +
                                  '<label for="topping-select">Select a topping</label>' +
                                  '<select class="toppings form-control">' +
                                    '<option value="mushrooms">Mushrooms</option>' +
                                    '<option value="onions">Onions</option>' +
                                    '<option value="peppers">Peppers</option>' +
                                    '<option value="pineapple">Pineapple</option>' +
                                    '<option value="tomatoes">Tomatoes</option>' +
                                    '<option value="olives">Olives</option>' +
                                    '<option value="sausage">Sausage</option>' +
                                    '<option value="pepperoni">Pepperoni</option>' +
                                  '</select>' +
                                '</fieldset>' +
                              '</div>')

  });

  $("form#pizza-creation").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#size").val();
    var orderedPizza = new Pizza(inputtedSize)
    var length = null;

    $(".new-topping").each(function() {
      var inputtedToppings = $(this).find(".toppings").val();
      length = orderedPizza.AddToppings(inputtedToppings);
    });
    $("div#display-order").show();
    $("div#display-order").append("<p>" + orderedPizza.Display() + "</p>");
    $("div#display-order").append("<p>" + orderedPizza.ThatWillCost(length) + "</p>");
  });


});

//Buisness Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.AddToppings = function(toppingsToBeAdded) {
  this.toppings.push(toppingsToBeAdded);
  return this.toppings.length;
}


Pizza.prototype.Display = function() {
  return "A " + this.size + " pizza with : " + this.toppings.join(", ");
}

Pizza.prototype.ThatWillCost = function(numberToppings) {
  if (this.size == "small") {
      return "Your total comes to " + (numberToppings + 10) + "$";
  } else if (this.size == "medium") {
      return "Your total comes to" + (numberToppings + 12) + "$";
  } else if (this.size == "large") {
      return "Your total comes to" + (numberToppings + 14) + "$";
  } else if (this.size == "xl") {
      return "Your total comes to " + (numberToppings + 16) + "$";
  }
}
