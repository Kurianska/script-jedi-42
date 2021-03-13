// https://www.codewars.com/kata/587593285448632b8d000143

async function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;
  shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;
  shippingRate = calculateShipping(shoppingCart, zipCode);
  orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
