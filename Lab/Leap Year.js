function solve(year) {
let message = "";
    if (year % 4 == 0 && year% 100 != 0 || year % 400 ===0){
       message = "yes";
    }else message = "no";
console.log(message);
}
solve(1985);