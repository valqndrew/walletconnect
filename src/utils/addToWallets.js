const fs = require("fs");
const imgFolder = "./walletsimg";

// fs.readdirSync(imgFolder).map((img) => {
//     fs.writeFileSync('')
//   console.log(img);
// });

function readdirSortTime(dir, timeKey = 'mtime') {
    return (
      fs.readdirSync(dir)
      .map(name => ({
        name,
        time: fs.statSync(`${dir}/${name}`)[timeKey].getTime()
      }))
      .sort((a, b) => (a.time - b.time)) // ascending
      .map(f => f.name)
    );
  }

  console.log(readdirSortTime(imgFolder))