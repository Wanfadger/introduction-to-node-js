const fs = require("fs");
const superagent = require("superagent");

///read dog.txt file

// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (e, data) => {
//   console.log(data);

//   //dog.ceo/api/breed/
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       fs.writeFile("dogImage.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//       });
//     })
//     .catch((error) => console.log(error.message));
// });

const fileReaderPromise = () => {
  return new Promise((ressolve, reject) => {
    fs.readFile(`${__dirname}/dog.txt`, "utf-8", (error, data) => {
      if (error) reject(error);
      ressolve(data);
    });
  });
};

const fileWriterPromise = (image) => {
  return new Promise((ressolve, reject) => {
    fs.writeFile("dogImage.txt", image, (err) => {
      if (err) reject(err);
      ressolve("Sucessfully written");
    });
  });
};

fileReaderPromise()
  .then((data) =>
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
  )
  .then((response) => fileWriterPromise(response.body.message))
  .then((res) => console.log(res))
  .catch((error) => console.error(error.message));
