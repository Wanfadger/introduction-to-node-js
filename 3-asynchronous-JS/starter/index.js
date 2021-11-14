const fs = require("fs")
const superagent = require("superagent")

///read dog.txt file

fs.readFile(`${__dirname}/dog.txt`, "utf-8", (e, data) => {
    console.log(data)

    //dog.ceo/api/breed/
    superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
      (error, response) => {
          if (error) return console.log(error.message);
          
          fs.writeFile("dogImage.txt", response.body.message, (err) => {
              if (err) return console.log(err.message);
          })
      }
    );
})