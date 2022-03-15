//Provlem-1
function TotalSum(computer, watch, coffe) {
    if (typeof(computer) != 'number' || typeof(watch) != 'number' || typeof(coffe) != 'number') {
        console.log('Price not a Valid Number');
    } else {
        console.log('Your Total Price is ' + (computer + watch + coffe))
    }
}
TotalSum(1000, 260, 50)