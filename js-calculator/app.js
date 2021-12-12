let input = document.getElementById("input");
let history = document.getElementById("history");
let result = document.getElementById("result");

let inputArr = [];
let historyArr = [];
let resultArr = [];
let signRegEx = /[\+?\-?\*?\/?]/g
let answer;

const calc = (val) => {
  resultArr = [];
  result.style.display = "none"
  input.style.display = "block";
  
  if(val.match(/[0-9\.]/g)){
    inputArr.push(val)
  }
  if ((val.match(signRegEx)) && !(signRegEx.test(inputArr[inputArr.length-1])) && (inputArr.length !== 0)) {
    inputArr.push(val)
  }
  if(val === "=" && inputArr.length !== 0){
    result.style.display = "block";
    input.style.display = "none";
    historyArr = inputArr;
    let res = evalCalc();
    answer = res;
    inputArr = [];
    resultArr.push(res);
  }
  if(val === "AC") inputArr = [];
  if(val === "<") inputArr.pop();
  if(val === "A") inputArr.push(answer);
  
  input.innerText = inputArr.join("");
  result.innerText = resultArr.join("");
  history.innerText = historyArr.join("")
}
const evalCalc = () => {
  if(inputArr.lenght == 0) return "";
  else {
    if(signRegEx.test(inputArr[inputArr.length-1])) inputArr.pop();
    out = eval(inputArr.join(""));
    inputArr = [];
    return out;
  }
}