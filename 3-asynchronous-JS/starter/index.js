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

// fileReaderPromise()
//   .then((data) =>
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//   )
//   .then((response) => fileWriterPromise(response.body.message))
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error.message));

////////////////Using Async-Await
const getDogPic = async () => {
  try {
    const readData = await fileReaderPromise();

    const response = await superagent.get(
      `https://dog.ceo/api/breed/${readData}/images/random`
    );

    await fileWriterPromise(response.body.message);
  } catch (error) {
    console.error(error.message);
  }
};


//getDogPic();

const getDogPic2 = async () => {
  try {
    const readData = await fileReaderPromise();

    const response = await superagent.get(
      `https://dog.ceo/api/breed/${readData}/images/random`
    );

    await fileWriterPromise(response.body.message);
  } catch (error) {
    console.error(error.message);
    throw error;
  }

  return "READY"
};


//returning valiue from async-await wihhout first accessing its as a promise
(async () => {
  const x = await getDogPic2()
  console.log(`Returned ${x}`)
})()