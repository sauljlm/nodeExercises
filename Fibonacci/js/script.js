let array = [];
let finalResult = null;
let a = 2;

function counter() {
  const number = parseInt(a);
  let result = null;
  for (let i = 0; i <= number; i++) {
    if (i == 0 || i == 1) {
      result = i; 
    } else {
      result = array[i - 1] + array[i - 2];
    }
    array.push(result);
  }
  finalResult = array[array.length - 1];
  console.log(finalResult);
}
counter();