const bundle = document.getElementById("bundle");
const amount = document.getElementById("amount");
const message = document.getElementById("message");

bundle.addEventListener("change", function () {
  amount.textContent = "KSh " + bundle.value;
});

function pay() {
  const phone = document.getElementById("phone").value.replace(/\s/g, "");

  if (!/^(07|01)\d{8}$/.test(phone)) {
    message.textContent = "Please enter a valid Kenyan M-Pesa number.";
    message.style.color = "#b42318";
    return;
  }

  message.style.color = "#067647";
  message.textContent =
    "Your order is ready. M-Pesa STK Push will be connected next.";
}
