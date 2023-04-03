const products = require('../data/products.json')
const stores = require('../data/stores.json')
const cities = require('../data/cities.json')


// products
//async process

const getProductByName = (name,callback) =>{
    setTimeout(()=>{
        const product = products.find(product => product.name === name)
        callback(product)
    },1000)
}

//callback

const handleGetProductByName = (product) =>{
    console.log("Product is :",product)
}

getProductByName("Coffee Star",handleGetProductByName)


//stores
// get id from stores.json

const getStoresById = (id,callback) =>{
    setTimeout(()=>{
        const storeId = stores.find(store=> store.id === id)
        callback(storeId)
    },1000)
}


const handleGetStoresId = (storeId) =>{
    console.log("Stores is",storeId)
}

getStoresById(2,handleGetStoresId)


//cities

const getCitiesByName = (name,callback) =>{
    setTimeout(()=>{
        const citie = cities.find(citie=> citie.name === name)
        callback(citie)
    },1000)

}

//handleGetNameForCities

const handleGetNameForCities = (citie) =>{
    console.log("cities is : ", citie)
}

getCitiesByName("Gaza",handleGetNameForCities)