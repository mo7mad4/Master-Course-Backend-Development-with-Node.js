const fs = require('fs')

//async
// const getProductByName = (name,callback) =>{
//     const data = fs.readFileSync('../data/products.json')
//     const json = JSON.parse(data)
//     const product = json.find(product => product.name === name)
//     if(product){
//         callback(undefined,product)
//     }else{
//         callback({message : "Product is not found"},null)
//     }
// }

// getProductByName("Tea Ahmad",(err,product)=>{
//     if(err){
//         err.message
//     }else{
//         console.log("Product is : ", product)
//     }
// })


const getProductByName = (name) =>{
    return new Promise((resolve, reject)=>{
        const data = fs.readFileSync('../data/products.json')
        const json = JSON.parse(data)
        const product = json.find(product => product.name === name)
        if(product){
            resolve(product)
        }else{
            err = {message : "Sorry, product is not found "}
            reject(err)
        }
    })
}

const getStoresById = (id) =>{
    return new Promise((resolve,reject)=>{
        const data = fs.readFileSync('../data/stores.json')
        const json = JSON.parse(data)
        const store = json.find(store => store.id === id)
        if(store){
            resolve(store)
        }else{
            reject({message : "Sorry, store is not found "})
        }
    })
}

const getCitiesByName = (name) =>{
    return new Promise((resolve,reject)=>{
        const data = fs.readFileSync('../data/cities.json')
        const json = JSON.parse(data)
        const city = json.find(city => city.name === name)
        if(store){
            resolve(city)
        }else{
            reject({message : "Sorry, city is not found "})
        }
    })
}

getProductByName('Tea Ahmad')
    .then(product =>{
        const storeId = product.store_id
        getStoresById(storeId)
            .then(store => {
                const cityName = store.city;
                getCitiesByName(cityName)
                    .then(city =>{
                        console.log("City is :", city)
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            })
            .catch(err => {
                console.log(err.message)
            })


        console.log("product price is : " , data.price)
    })
    .catch(err =>{
        console.log(err.message)
    })

//  حل لكود الي فوق functions  حل لتداخل اكثر من 
getProductByName("Tea Ahmad")
    .then(product => {
        return getStoresById(product.store_id)
    })
    .then(store => {
        return getCitiesByName(store.city)
    })
    .then(city => {
        console.log("city is :", city)
    })
    .catch(err => {
        console.log(err.message)
    })