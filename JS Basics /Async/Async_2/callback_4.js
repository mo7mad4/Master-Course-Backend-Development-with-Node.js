const products = require("../data/products.json");
const stores = require("../data/stores.json");
const cities = require("../data/cities.json");

// products
const getProductByName = (name, callback) => {
  setTimeout(() => {
    const product = products.find((product) => product.name === name);
    if (product) {
      callback(undefined, product);
    } else {
      err = { message: "Product not found" };
      callback(err, null);
    }
  }, 1000);
};

//stores

const getStoresById = (id, callback) => {
  setTimeout(() => {
    const storeId = stores.find((store) => store.id === id);
    if (storeId) {
      callback(undefined, storeId);
    } else {
      callback({ message: "Store not found" }, null);
    }
  }, 1000);
};

//cities

const getCitiesByName = (name, callback) => {
  setTimeout(() => {
    const city = cities.find((city) => city.name === name);
    if (city) {
      callback(undefined, city);
    } else {
      callback({ message: "citie not found" }, null);
    }
  }, 1000);
};

//
testProductName = "Tea Ahmad";

getProductByName(testProductName, (err, product) => {
  if (err) {
    console.log("error is :", err.message);
  } else {
    const storeId = product.store_id;

    getStoresById(storeId, (err, store) => {
      if (err) {
        console.log("error is :", err.message);
      } else {
        console.log("store is", store);
        const cityName = store.city;

        getCitiesByName(cityName, (err, state) => {
          if (err) {
            console.log("error is :", err.message);
          } else {
            console.log("City name is ", state.name);
          }
        });
      }
    });
  }
});
