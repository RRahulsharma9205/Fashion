
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
  }

   function addToCart() {
      const product = {
        img: document.getElementById("product_img").getAttribute("src"),
        name: document.getElementById("product_name").innerText,
        price: document.getElementById("product_price").innerText
      };
      localStorage.setItem("cartItem", JSON.stringify(product));
      window.location.href = "cart.html";
    }

