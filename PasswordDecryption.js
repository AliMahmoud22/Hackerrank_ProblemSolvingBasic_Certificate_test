let s = "43Ah*ck0rr0nk";
//another example
//let s="51Pa*0Lp*0e";
let size = s.length;
let pass = "";
var pointer = 0;
for (let i = size - 1; i > pointer; ) {
  if (s[i] == 0) {
    pass = s[pointer] + pass;
    pointer++;
    i--;
  } else if (s[i] == "*") {
    pass = s[i - 1] + s[i - 2] + pass;
    i -= 3;
  } else if (s[i] != "0") {
    // lowercase charcter
    pass = s[i] + pass;
    i--;
  }
}
console.log(s);
console.log(pass);
//first solution "hAcK3rr4nK"
//second solution "aP1pL5e"
