//UI Logic

$(document).ready(function() {


  $("#add-toppings").click(function() {
    $(".new-toppings").append('<div class="new-topping")' +
                                '<fieldset class="form-group"> ' +
                                  '<label for="topping-select">Select a topping</label>' +
                                  '<select class="toppings form-control">' +
                                    '<option value="mushroom">Mushrooms</option>' +
                                    '<option value="onion">Onions</option>' +
                                    '<option value="pepper">Peppers</option>' +
                                    '<option value="pineapple">Pineapple</option>' +
                                    '<option value="tomato">Tomatoes</option>' +
                                    '<option value="olive">Olives</option>' +
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

    $(".new-topping").each(function() {
      var inputtedToppings = $(this).find(".toppings").val();
      orderedPizza.AddToppings(inputtedToppings);
    });

    $("ul#display-order").append("<li>" + orderedPizza.display() + "</li>")
  });


});

//Buisness Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.AddToppings = function(toppingsToBeAdded) {
  this.toppings.push(toppingsToBeAdded);
}

Pizza.prototype.display = function() {
  return "A " + this.size + " pizza with : " + this.toppings;
}
