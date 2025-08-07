const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropDowns = document.querySelectorAll(".dropdown select");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let amount = document.querySelector(".amount input");
let btn = document.querySelector("#my-btn");
let msg=document.querySelector("#msg")
// Populate dropdowns
for (let select of dropDowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected"; // ✅ fixed typo
    }
  }

  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

// Flag update
const updateFlag = (element) => {
  let code = countryList[element.value];
  let newSrc = `https://flagsapi.com/${code}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Button click handler
btn.addEventListener("click", async (event) => {
  event.preventDefault();

  let amountVal = amount.value;
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let convertedAmount = (amountVal * rate).toFixed(2);
    msg.innerHTML=`${amountVal} ${fromCurr} = ${convertedAmount} ${toCurr}`

    
    
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
