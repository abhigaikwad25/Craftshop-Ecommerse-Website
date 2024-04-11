document.addEventListener("DOMContentLoaded", function() {
    const selectedProduct = localStorage.getItem('selectedProduct');
    const cart_img1=document.getElementById('cart_img1');

    if (selectedProduct === 'product1') {
        cart_img1.src = '../craftshop_img/img_6.jpg';
        document.getElementById('price1').innerHTML="Rs.449";
    }

})