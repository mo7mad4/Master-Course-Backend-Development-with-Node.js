//sync
const computeTax = (amount, taxPercent)=>{
    const tax = (taxPercent/100) * amount; //=> amount بطلع لالي قديش قيمة الضريبة من 
    return tax

}
console.log("sync :",computeTax(400,10))

//async for this function

const callback = () => {
    console.log("async: ",computeTax(400,10))
}
setTimeout(callback,1000)
