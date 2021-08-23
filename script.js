let cart = {
    count:0,
    items: Array().fill(null)
}

let item = {
    name: "",
    price: 0,
    description: "",
    id: ""
}

let add_to_cart = () =>
{
    counter = document.getElementById("count");
    console.log(cart.count);
    cart.count += 1;
    counter.innerText = `${cart.count}`;
}