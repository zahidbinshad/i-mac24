//extraMemoryCostFunction
function getExtraMemoryCost(cost, element){
    const basePrice = cost;
    const extraFetureCost = document.getElementById(element);
    extraFetureCost.innerText = parseInt(basePrice);
}

//totalCostfunction

function totalPrice(){
    let basePriceText = document.getElementById('base-price');
    let basePrice = parseFloat(basePriceText.innerText);
    let memoryCostText = document.getElementById('memory-cost');
    let memoryCost = parseFloat(memoryCostText.innerText);
    let storageCostText = document.getElementById('storage-cost');
    let storageCost = parseFloat(storageCostText.innerText);
    let deliveryChargetext = document.getElementById('delivery-cost');
    let deliveryCharge = parseFloat(deliveryChargetext.innerText);

    let subTotal = document.getElementById('sub-total');
    let finalPrice = document.getElementById('final-price')
   
    
    
    let totalCost = basePrice + memoryCost + storageCost + deliveryCharge ;

    subTotal.innerText = totalCost;
    finalPrice.innerText = totalCost;

    return totalCost;
}
    


//extraMemoryevent
document.getElementById('memory8').addEventListener('click',function(){
    // 
    getExtraMemoryCost(0, 'memory8');
    
    totalPrice();

});
document.getElementById('memory16').addEventListener('click',function(){
    getExtraMemoryCost(180);
    
    totalPrice();
    
    
    
});

//extraStorageCostFunction
function getExtraStorageCost(cost){
    const basePrice = cost;
    const extraFetureCost = document.getElementById('storage-cost');
    extraFetureCost.innerText = parseInt(basePrice);
}
//extraStorageEvent
document.getElementById('storage256').addEventListener('click',function(){
    getExtraStorageCost(0);
    totalPrice();
})
document.getElementById('storage512').addEventListener('click',function(){
    getExtraStorageCost(100);
    totalPrice();
})
document.getElementById('storage1TB').addEventListener('click',function(){
    getExtraStorageCost(180);
    totalPrice();
})

//extraFastDelivaryCostFunction
function getDelivaryCost(cost){
    const basePrice = cost;
    const extraFetureCost = document.getElementById('delivery-cost');
    extraFetureCost.innerText = parseInt(basePrice);
}

document.getElementById('prime-delivery').addEventListener('click',function(){
    getDelivaryCost(0);
    totalPrice();
})

document.getElementById('fast-delivery').addEventListener('click',function(){
    getDelivaryCost(20);
    totalPrice();
})

//addCuponCode

document.getElementById('cupon-apply').addEventListener('click',function(){
    let addCuponCode = document.getElementById('cupon-code');

    if(addCuponCode.value == 'comilla'){
       let subTotatext = document.getElementById('sub-total');
       let subTotal = parseFloat( subTotatext.innerText);
       let discountAmount = (subTotal*40)/100;
       finalTotal = subTotal -  discountAmount;
       let finalPrice = document.getElementById('final-price');

       finalPrice.innerText = finalTotal;


    }
})
