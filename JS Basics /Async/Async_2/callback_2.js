const products = require("../data/products.json")


//async
const getProductByName = (name,callback) =>{
    setTimeout(()=>{
        const product = products.find(product => product.name === name) //blocking coz i get data for arrays
        callback(product)
        return product
    },1000)
}


//callback => الجاسوس
const handleGetProductByName = (product) =>{
    console.log("Product is ", product)
    console.log("Product name is ", product.name)
    console.log("Product price is ", product.price)
    console.log("Product discount is ", product.discount)
    console.log("Product store_id is ", product.store_id)

    

}

getProductByName("Tea Ahmad",handleGetProductByName)

// getProductByName("Tea Ahmad",(product) =>{
//     console.log("Product is ", product)
//     console.log("Product name is ", product.name)
//     console.log("Product price is ", product.price)
//     console.log("Product discount is ", product.discount)
//     console.log("Product store_id is ", product.store_id)

    

// })