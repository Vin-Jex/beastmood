const crypto = require("crypto");

//32 bytes key (256 bits)
const generateRandomSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const secretKey = generateRandomSecretKey();
console.log("Random Secret Key:", secretKey);
