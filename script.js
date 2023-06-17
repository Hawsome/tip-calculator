var currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    INR: "₹",
    AUD: "A$",
    CAD: "C$",
    CHF: "Fr",
    CNY: "¥",
    SEK: "kr",
    NZD: "NZ$",
    NGN: "NGN"
  };
  
  function calculateTip() {
    var billAmount = parseFloat(document.getElementById("bill-amount").value);
    var tipPercentage = parseFloat(document.getElementById("tip-percentage").value);
    var selectedCurrency = document.getElementById("currency-select").value;
  
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;
  
    document.getElementById("tip-amount").textContent = "Tip Amount: " + currencySymbols[selectedCurrency] + tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = "Total Amount: " + currencySymbols[selectedCurrency] + totalAmount.toFixed(2);
  }
  
  document.getElementById("calculate-button").addEventListener("click", calculateTip);