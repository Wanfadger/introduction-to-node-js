const fs = require("fs");
const superagent = require("superagent");

///read dog.txt file

fs.readFile(`${__dirname}/dog.txt`, "utf-8", (e, data) => {
  console.log(data);

  //dog.ceo/api/breed/
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      fs.writeFile("dogImage.txt", response.body.message, (err) => {
        if (err) return console.log(err.message);
      });
    })
    .catch((error) => console.log(error.message));
});
