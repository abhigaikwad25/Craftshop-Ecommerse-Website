
// function prd1(src){
//     console.log("hello");
//     // document.getElementById("prdimg1").
    
//     document.getElementById("po1").innerHTML="Hello"
// }

// Retrieve the selected product from localStorage
// const selectedProduct = localStorage.getItem('selectedProduct');

// // Update the product image based on the selected product
// const productImage = document.getElementById('prdimg1');
// if (selectedProduct === 'product1') {
//     prdimg1.src = 'craftshop_img/img_6.jpg';
// } 
// else if (selectedProduct === 'product2') {
//     prdimg1.src = 'craftshop_img/img_7.jpeg';
// }

document.addEventListener("DOMContentLoaded", function() {
    const selectedProduct = localStorage.getItem('selectedProduct');
    const priceofPrd = localStorage.getItem('priceofPrd');
    const productImage = document.getElementById('prdimg1');
    // console.log(priceofPrd);

    if (selectedProduct === 'product1') {
        productImage.src = 'craftshop_img/img_6.jpg';
        document.getElementById('heading').innerHTML="POT";
        var priceTag = document.getElementById('price_1').value;
        console.log(priceTag)
        document.getElementById('price').innerHTML=priceTag;
        // document.getElementById('price').innerHTML="RS.449";
        // document.getElementById('del').innerHTML="RS.899";
        // localStorage.setItem('selectedProduct', product);
        // window.location.href = '../subpages/cart.html';
    } 
    else if (selectedProduct === 'product2') {
        productImage.src = 'craftshop_img/img_7.jpg';
        document.getElementById('heading').innerHTML="Decorative Lamp";
        // var priceTag = document.getElementById('price_1').textContent;
        // document.getElementById('price').innerHTML=priceTag;
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product3') {
        productImage.src = 'craftshop_img/img_9.jpg';
        document.getElementById('heading').innerHTML="Handmade Art";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
        localStorage.setItem('selectedProduct', product);
        window.location.href = '../subpages/cart.html';
    }
    else if (selectedProduct === 'product4') {
        productImage.src = 'craftshop_img/img_22.jpg';
        document.getElementById('heading').innerHTML="Metal Bango Art";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product5') {
        productImage.src = 'craftshop_img/img_25.jpg';
        document.getElementById('heading').innerHTML="Dear Metal Stachu";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product6') {
        productImage.src = 'craftshop_img/img_10.jpg';
        document.getElementById('heading').innerHTML="Handmade Craft";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product7') {
        productImage.src = 'craftshop_img/img_11.jpg';
        document.getElementById('heading').innerHTML="Elephant Stachu";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product8') {
        productImage.src = 'craftshop_img/img_12.jpg';
        document.getElementById('heading').innerHTML="Musician with Turban";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product9') {
        productImage.src = 'craftshop_img/img_24.jpg';
        document.getElementById('heading').innerHTML="Musical Artist Stachu";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product10') {
        productImage.src = 'craftshop_img/img_21.jpg';
        document.getElementById('heading').innerHTML="Musician with Turban";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product11') {
        productImage.src = 'craftshop_img/img_13.jpg';
        document.getElementById('heading').innerHTML="Showpiece Figurine";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product12') {
        productImage.src = 'craftshop_img/img_14.jpg';
        document.getElementById('heading').innerHTML="Pen Stand";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product13') {
        productImage.src = 'craftshop_img/img_15.jpg';
        document.getElementById('heading').innerHTML="Musicians Stachu";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product14') {
        productImage.src = 'craftshop_img/img_20.jpg';
        document.getElementById('heading').innerHTML="Deer Pair Brass";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product15') {
        productImage.src = 'craftshop_img/img_19.jpg';
        document.getElementById('heading').innerHTML="Deer Pair Brass";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product16') {
        productImage.src = 'craftshop_img/img_16.jpg';
        document.getElementById('heading').innerHTML="Flamingos Stachu";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product17') {
        productImage.src = 'craftshop_img/img_17.jpg';
        document.getElementById('heading').innerHTML="Home Decorative Stachu";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product18') {
        productImage.src = 'craftshop_img/img_18.jpg';
        document.getElementById('heading').innerHTML="Musician with Turban Stachu";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product19') {
        productImage.src = 'craftshop_img/img_18.jpg';
        document.getElementById('heading').innerHTML="Musician with Turban";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }
    else if (selectedProduct === 'product20') {
        productImage.src = 'craftshop_img/img_18.jpg';
        document.getElementById('heading').innerHTML="Musician with Turban";
        document.getElementById('price').innerHTML="RS.449";
        document.getElementById('del').innerHTML="RS.899";
    }



    
});
function prd1(product) {
    // Pass the selected product to the details page using localStorage
    localStorage.setItem('selectedProduct', product);
    // Navigate to the product details page
    window.location.href = 'subpages/cart.html';
}


// function viewdetails(){
//     let lpimg=document.getElementsByClassName("prd_img1");
//     let pdimg=document.getElementsByClassName("img");
    
// }
