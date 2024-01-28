function solve(fruit,grams,kgprice) {
    let totalPrice = 0;
    let kgweight = grams/1000;
    totalPrice = kgweight * kgprice;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgweight.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80);