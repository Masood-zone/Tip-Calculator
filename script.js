//Input fields
const billInputEl = document.querySelector("#bill-amount");
const tipInputEl = document.querySelector("#tip-percent");

//Results section
const result = document.querySelector("#result");
//Calculate button
const btn = document.querySelector("#solve");

btn.addEventListener("click", () => {
  let billValue = Number(billInputEl.value);
  let tipValue = Number(tipInputEl.value);
  let total = billValue * (1 + tipValue / 100);
  result.textContent = `$${total.toFixed(2)}`;
});
