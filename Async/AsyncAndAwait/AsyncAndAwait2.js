const fs = require('fs')

//async
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


// promise handling by async

const getCityFromProduct = async (productName) => {
    try {
        const product = await getProductByName(productName)
        const store = await getStoresById(product.store_id)
        const city = await getCitiesByName(store.city)

        console.log(city)
    } catch (err) {
        console.log(err.message)
    }
}

getCityFromProduct('Tea Ahmad')


/**
 * look files 07,08_async
 * we notice that you can handle async response within async function, or return async response from async function
 * if u handle it within async(), you can access it directly without then,catch
 * but if u return it from async(), you will deal with async response as a promise then,catch
 */