const products = require("../data/products.json")

//async

// const getProductByName = (name) =>{
//     const product = products.find(product => product.name === name)
//     return product
// }

const getProductByName = (name) =>{
    setTimeout(()=>{
        const product = products.find(product => product.name === name) //blocking coz i get data for arrays
        return product
    },1000)
}


let product = getProductByName("Tea Ahmad")
console.log(product) //undefined

/**
 * we have 3 ways make handle outputs(response)for async
 * 1- callback
 * 2-promise
 * 3-async and await
 */