const fs = require("fs");

try {
  let data = fs.readFileSync("wallets.txt", "utf8");

  data = data.toString().split(/[\n \t ' ']/);

  const wallets = [...new Set(data)];

  //   console.log(wallets);

  const stream = fs.createWriteStream("wallets.js");
  stream.once("open", () => {
    wallets.map((wallet) => {
      stream.write(`"${wallet}",\n`);
    // console.log(wallet)
    });
  });
} catch (e) {
  console.log("Error: ", e.stack);
}
