// async

const getUSData =  async () =>{
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    if(response.status !== 200){
        err = {message : "connot get resource"}
        // console.log(err)
        // return err
        throw new Error( "connot get resource")
    }
    const json = await response.json()
    // console.log(json)
    return json;
}

getUSData()
.then(json => {
    console.log(json)
})
.catch(err => {
    console.log(err.message)
})