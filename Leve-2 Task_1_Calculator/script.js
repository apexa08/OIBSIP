let exp = document.getElementById("expression");
let res = document.getElementById("result");
let lastAns = 0;

function append(val) {
  if (val === '±') {
    res.innerText = res.innerText * -1;
  } else {
    exp.innerText += val;
  }
}

function calculate() {
  try {
    let output = eval(exp.innerText.replace('×','*').replace('÷','/'));
    res.innerText = output;
    lastAns = output;
  } catch {
    res.innerText = "Error";
  }
}

function clearAll() {
  exp.innerText = "";
  res.innerText = "0";
}

function del() {
  exp.innerText = exp.innerText.slice(0, -1);
}

function ans() {
  exp.innerText += lastAns;
}

function sqrt() {
  res.innerText = Math.sqrt(eval(exp.innerText));
}
