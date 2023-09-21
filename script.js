// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    email,
    city,
    zipCode,
    status,
  };
}

function isNumber(string) {
  if (isNaN(string)) {
    return false;
  } else {
    return true;
  }
}

function checkboxIsChecked() {
  const formData = handleGetFormData();
  return formData.status;
}

function validateFormData(data) {
  const checkBox = checkboxIsChecked();
  return data !== null && isNumber(data.zipCode) && checkBox;
}

function submit() {
  const warningParent = document.getElementById("warning");
  const formData = handleGetFormData();
  const validateData = validateFormData(formData);
  if (validateData === false) {
    warningParent.innerHTML = "Periksa form anda sekali lagi";
    warningParent.style.backgroundColor = "#FFE768";
  } else {
    warningParent.innerHTML = "";
    warningParent.style.backgroundColor = "";
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  submit();
});
