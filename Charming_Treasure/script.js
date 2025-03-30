document.addEventListener("DOMContentLoaded", () => {
    let cart = [];

    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const cartCountElement = document.getElementById("cart-count");

    function updateCart() {
        cartItemsElement.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;

            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-item");
            removeBtn.dataset.index = index;
            li.appendChild(removeBtn);

            cartItemsElement.appendChild(li);
        });

        cartTotalElement.textContent = total;
        cartCountElement.textContent = cart.length;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);

            cart.push({ name, price });
            updateCart();
        });
    });

    cartItemsElement.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.dataset.index;
            cart.splice(index, 1);
            updateCart();
        }
    });

    document.getElementById("checkout").addEventListener("click", () => {
        alert(cart.length === 0 ? "Your cart is empty!" : "Proceeding to Checkout!");
        cart = [];
        updateCart();
    });
});
