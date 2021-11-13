const fs = require("fs");
const http = require("http");
const url = require("url");

//blocking sysnchronous way

// const textIn = fs.readFileSync("txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about Avacado: ${textIn}`;
// console.log(textOut);

// fs.writeFileSync("txt/output.txt", textOut);
// console.log("Written Successfully");

///none blocking asycn operation
// fs.readFile("txt/input.txt", "utf-8", (error, data) => {
//   console.log(data);
// });

// console.log("after");

// fs.readFile("txt/start.txt", "utf-8", (error, data1) => {
//   fs.readFile(`txt/${data1}.txt`, "utf-8", (error, dat2) => {
//     fs.readFile(`txt/append.txt`, "utf-8", (error, data3) => {
//       fs.writeFile(`txt/final.txt`, `${dat2} . \n ${data3}`, (error, data) => {
//         if (error) console.log("something wrong happened");
//         console.log("success");
//       });
//     });
//   });
// });

/////////////////////
//CREATING SERVER

//template files
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");
const templateOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, "utf-8");
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`, "utf-8");

const replaceTemplate = (product, template) => {
  let output = template.replace(/{%PRODUCT_NAME%}/g, product.productName);
  output = output.replace(/{%PRODUCT_IMAGE%}/g, product.image);
  output = output.replace(/{%PRODUCT_QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRODUCT_NUTRIENTS%}/g, product.image);
  output = output.replace(/{%PRODUCT_PRICE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.image);
  output = output.replace(/{%PRODUCT_ID%}/g, product.id);
  output = output.replace(/{%PRODUCT_DESCRIPTION%}/g, product.description);

  if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  
  return output
}


//to avoid reading the file each time a requests comes in , use sysnchronous read outside the server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const products = JSON.parse(data)

//__dirname location of current file
const server = http.createServer((req, res) => {

  const { pathname, query } = url.parse(req.url, true);
  console.log(pathname);
  console.log(query);
  //  console.log(products)
  // if (pathName === '/home') res.end("home")
  // else if(pathName == "/overview") res.end("Over view")
  // fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (error, data) => {
  //   res.end(data);
  // });

  //overview
  if (pathname === "/" || pathname === "/overview") {
    const htmlCards = products
      .map((product) => replaceTemplate(product, templateCard))
      .join();
    // console.log(htmlCards)

    let overviewOutput = templateOverview.replace(
      /{%PRODUCT_CARDS%}/g,
      htmlCards
    );

  res.setHeader("200", { "Content-type": "text/html" });  
    res.end(overviewOutput);
  }

  //product
  else if (pathname === `/product`) {
    const id = query.id
    const product = products.find((p) => p.id === Number(id));
    // console.log(product)
    let productOutput = replaceTemplate(product, templateProduct)
    
    res.setHeader("200", { "Content-type": "text/html" });
    res.end(productOutput);
  }

  //api
  else if (pathname === "/api") {
    res.setHeader("200", { "Content-type": "application/json" });
    res.end(data);
  }

  //not found
  else {
    res.setHeader("404", {});
    res.end("Page Not Found");
  }
});

server.listen("8000", "127.0.0.1", () => {
  console.log("server started on port 8000");
});
