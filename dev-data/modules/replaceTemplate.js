module.exports = (product, template) => {
  let output = template.replace(/{%PRODUCT_NAME%}/g, product.productName);
  output = output.replace(/{%PRODUCT_IMAGE%}/g, product.image);
  output = output.replace(/{%PRODUCT_QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRODUCT_NUTRIENTS%}/g, product.image);
  output = output.replace(/{%PRODUCT_PRICE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.image);
  output = output.replace(/{%PRODUCT_ID%}/g, product.id);
  output = output.replace(/{%PRODUCT_DESCRIPTION%}/g, product.description);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};
