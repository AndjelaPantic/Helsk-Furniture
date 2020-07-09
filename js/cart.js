let cart = (JSON.parse(localStorage.getItem("cart")) || []);
const cartDOM = document.querySelector("#cart");

// Store products to the cart
  
if (cart.length > 0) {
  cart.forEach(cartItem => {
    const product = cartItem;
    
    document.getElementById("basket-items-n").innerHTML = 
    localStorage.getItem("basket-items-n");

    cartDOM.insertAdjacentHTML("beforeend", `
      <div id="cart-item" class="cart-item row justify-content-center
        align-items-center">
        <div id="cart-item-image" class="col-2">
          <img src="${product.image}" alt="${product.name}" 
          class="img-fluid mx-auto d-block"></div>
        <div id="cart-item-name" class="col-3"><p>${product.name}</p></div>
        <div id="cart-item-price" class="col-3"><p>${product.price}</p></div>
        <div class="col-2"><p id="cart-item-quantity">${product.quantity}</p></div>
        <div class="col-1"><button id="remove-item" type="button" 
          class="btn btn-dark btn-x" data-action="REMOVE-ITEM">x</button></div>
      </div>
      `);

    // Remove the product from the cart

    const cartItemsDOM = document.querySelectorAll("#cart-item");
    cartItemsDOM.forEach(cartItemDOM => {
      
      cartItemDOM.querySelector('[data-action="REMOVE-ITEM"]').addEventListener("click", () => {
          
        cartItemDOM.remove();

        if (cartItemDOM.querySelector('#cart-item-name').innerText === product.name) {
          cart = cart.filter(cartItem => cartItem.name !== product.name);

          // Number of products in cart - counter
    
          let basket_items_n = [];
    
          cart.forEach(p => {
            basket_items_n.push(p.quantity);
            
          });
          
          const sum = basket_items_n.reduce((x, y) => {
            return (+x) + (+y);
          }, 0);
        
          document.getElementById("basket-items-n").innerHTML = sum;
          localStorage.setItem("basket-items-n", sum);

          // Local storage - cart

          localStorage.setItem("cart", JSON.stringify(cart));
        };

      });
      
    });

  });
};