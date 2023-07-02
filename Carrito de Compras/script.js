$(document).ready(function() {
  // Objeto para representar un ítem en el carrito
  function CartItem(name, price) {
    this.name = name;
    this.price = parseFloat(price);
  }

  // Array para almacenar los ítems en el carrito
  var cartItems = [];

  // Función para agregar un ítem al carrito
  function addToCart(item) {
    cartItems.push(item);
    renderCart();
  }

  // Función para eliminar un ítem del carrito
  function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
  }

  // Función para renderizar los ítems del carrito y el total de la compra
  function renderCart() {
    var cartItemsElement = $('#cartItems');
    cartItemsElement.empty();

    var cartTotal = 0;

    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];

      var row = $('<tr>');
      row.append($('<td>').text(item.name));
      row.append($('<td>').text(item.price.toFixed(2)));
      row.append($('<td>').html('<button class="btn btn-danger btn-sm" onclick="removeFromCart(' + i + ')">Eliminar</button>'));

      cartItemsElement.append(row);

      cartTotal += item.price;
    }

    $('#cartTotal').text(cartTotal.toFixed(2));
  }

  // Manejar el envío del formulario para agregar un ítem al carrito
  $('#cartForm').submit(function(event) {
    event.preventDefault();

    var itemName = $('#itemName').val();
    var itemPrice = $('#itemPrice').val();

    addToCart(new CartItem(itemName, itemPrice));

    // Restablecer los campos del formulario
    this.reset();
  });

  // Manejar el evento click de los botones de eliminar
  $(document).on('click', '.btn-danger', function() {
    var index = $(this).closest('tr').index();
    removeFromCart(index);
  });
});
