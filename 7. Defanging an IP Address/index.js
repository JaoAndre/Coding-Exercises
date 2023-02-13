const defangIPaddr = function (address) {
  let newAddress = "";

  for (const char of address) {
    char === "." ? (newAddress += "[.]") : (newAddress += char);
  }

  console.log(newAddress);
};

defangIPaddr("255.100.50.0");