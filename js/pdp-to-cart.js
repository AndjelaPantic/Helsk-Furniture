/* Add to the cart */

"use strict"
const addToCartButtonsDOM = document.querySelectorAll("[data-action='ADD-TO-CART']");
const itemIncrease = document.querySelectorAll("[data-action='INCREASE-ITEM']");
const itemDecrease = document.querySelectorAll("[data-action='DECREASE-ITEM']");
const cartItemQuantity = document.querySelectorAll("[data-action='ITEM-QUANTITY']");

// Store the products to the cart
if (cart.length > 0) {
  cart.forEach(cartItem => {
    const product = cartItem;
    
    // Change text and disable "add to cart" button after click
    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
      const productDOM = addToCartButtonDOM.parentNode.parentNode.parentNode;
      
      if (productDOM.querySelector("#product-name").innerText === product.name) {
        addToCartButtonDOM.innerText = "In cart";
        addToCartButtonDOM.disabled = true;
      };
    });

  });
};

// Increase button
itemIncrease.forEach(itemIncrease => {
  itemIncrease.addEventListener("click", () => {
  
    cartItemQuantity.forEach(cartItemQuantity => {
      if (itemIncrease.getAttribute("name") === cartItemQuantity.getAttribute("name")) {
        let quantity = parseInt(cartItemQuantity.value, 10);
        quantity = isNaN(quantity) ? 1 : quantity;
        quantity++;
        cartItemQuantity.value = quantity;
      } 
    });

  });
});

// Decrease button
itemDecrease.forEach(itemDecrease => {
  itemDecrease.addEventListener("click", () => {
  
    cartItemQuantity.forEach(cartItemQuantity => {
      if (itemDecrease.getAttribute("name") === cartItemQuantity.getAttribute("name")) {
        let quantity = parseInt(cartItemQuantity.value, 10);
        quantity = isNaN(quantity) ? 1 : quantity;
        quantity !== 1 ? quantity-- : 1;
        cartItemQuantity.value = quantity;
      } 
    });

  });
});

// Add product to the cart
addToCartButtonsDOM.forEach(addToCartButtonDOM => {

  addToCartButtonDOM.addEventListener("click", () => {
    const productDOM = addToCartButtonDOM.parentNode.parentNode.parentNode;
    const product = {
      image: productDOM.querySelector("#product-image").getAttribute("src"),    
      name: productDOM.querySelector("#product-name").innerText,
      price: productDOM.querySelector("#product-price").innerText,
      quantity: productDOM.querySelector("#cart-item-quantity").value
    };

    // Only one click "add to cart" per product
    const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

    if (isInCart === false) {

      cartDOM.insertAdjacentHTML("beforeend", `
      <div id="cart-item" class="cart-item row h-100 align-items-center">
        <div id="cart-item-image" class="col-3"><img src="${product.image}" 
          alt="${product.name}" class="img-fluid mx-auto d-block"></div>
        <div id="cart-item-name" class="col-3"><p>${product.name}</p></div>
        <div id="cart-item-price" class="col-3"><p>${product.price}</p></div>
        <p id="cart-item-quantity">${product.quantity}</p>
        <button id="remove-item" type="button" class="btn btn-dark mx-auto d-block" 
          data-action="REMOVE-ITEM">x</button>
      </div>
      `);


      // Reset quantity value after add product to the cart
      cartItemQuantity.forEach(cartItemQuantity => {
        cartItemQuantity.value = 1;
      });

      // Push characteristics of the product to the array
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

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

      // Change text and disable "add to cart" button after click
      addToCartButtonDOM.innerText = "In cart";
      addToCartButtonDOM.disabled = true;

      // Remove the product from the cart
      const cartItemsDOM = document.querySelectorAll("#cart-item");

      cartItemsDOM.forEach(cartItemDOM => {
        
        cartItemDOM.querySelector('[data-action="REMOVE-ITEM"]').addEventListener("click", () => {
            
          cartItemDOM.remove();

          if (cartItemDOM.querySelector('#cart-item-name').innerText === product.name) {
            cartItemDOM.remove();
            cart = cart.filter(cartItem => cartItem.name !== product.name);
            
            localStorage.setItem("cart", JSON.stringify(cart));
            addToCartButtonDOM.innerText = 'Add To Cart';
            addToCartButtonDOM.disabled = false;
          };
        });
        
      });

    };

  });
});

