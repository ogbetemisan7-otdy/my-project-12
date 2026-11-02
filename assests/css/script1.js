let score=200;
if(score>=0 && score<=100){
    grade.style.color="#00ff00"
}
else{
    grade.style.color="#ff0000"
} 
let price=40000
let box;
let totalCost;
document.getElementById("my-head").onclick=function(){
    bags=document.getElementById("mytext").value;
    bags=Number(box);
    totalCost=price*box;
    console.log(totalCost)
    document.getElementById("myh3").textContent=totalCost+"NGN";
    return `TotalSales is ${totalCost}`

}
let unitPrice=100
let numberOfTools;
let netTotal;
document.getElementById("my-head-2").onclick=function(){
    numberOfTools=document.getElementById("my-text-2").value;
    numberOfTools=Number(numberOfBarrels);
    netTotal=numberOfTools*unitPrice;
    console.log(netTotal)
    document.getElementById("my-h-2").textContent=netTotal+"USD";
    return `TotalSales is ${netTotal}USD`
}
const BuildingTools=['wheelbarrow','concrete mixer','bulldozer','excavator','crane','shovel',
                     'wheel loader','dump truck','vibrator','compactor','ladder','scaffolding',
                     'spirit level','measuring tape','trowel','hacksaw','welding machine',
                     'drilling machine','jackhammer','concrete pump']

console.log(BuildingTools.length)
console.log(BuildingTools[0])
console.log(BuildingTools[1])
console.log(BuildingTools[2])
console.log(BuildingTools[3])
console.log(BuildingTools[4])
console.log(BuildingTools[5])
console.log(BuildingTools[6])
console.log(BuildingTools[7])
console.log(BuildingTools[8])
console.log(BuildingTools[9])
console.log(BuildingTools[10])
console.log(BuildingTools[11])
console.log(BuildingTools[12])
console.log(BuildingTools[13])
console.log(BuildingTools[14])
console.log(BuildingTools[15])
console.log(BuildingTools[16])
console.log(BuildingTools[17])
console.log(BuildingTools[18])
console.log(BuildingTools[19])
console.log(BuildingTools[20])

document.getElementById("sitetools").textContent=BuildingTools