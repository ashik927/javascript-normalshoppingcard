const plus=document.getElementById("plus");
plus.addEventListener("click",function(){
//    const addValue=document.getElementById("addValue").value;
//    const added=parseFloat(addValue);
//    const add=added+1;
//    document.getElementById("addValue").value=add;
//    const perPrice=document.getElementById("perPrice").innerText;
//    const price=parseFloat(perPrice);
//    const total=price+1219;

//    document.getElementById("perPrice").innerText=total;
//    document.getElementById("subPrice").innerText=total;
//    document.getElementById("totalPrice").innerText=total;
editPlus("addValue","perPrice",1,1219);
// const perPrice1=parseFloat(document.getElementById("perPrice").innerText);
// const perPrice2= parseFloat(document.getElementById("perprice").innerText);
// const subPrice=perPrice1+perPrice2;
// document.getElementById("subPrice").innerText=subPrice;
editsubprice("perPrice","perprice","subPrice");
editsubprice("subPrice","taxid","totalPrice");
tax("subPrice","taxid",100,15);

})

const bal=document.getElementById("minus");
bal.addEventListener("click",function(){
//    const minusValue=document.getElementById("addValue").value;
//    const minus=parseFloat(minusValue);
//    const minusprice=minus-1;
//    document.getElementById("addValue").value=minusprice;
//    const protiPrice=document.getElementById("perPrice").innerText;
//    const pric=parseFloat(protiPrice);
//    const totalcost=pric-1219;

//    document.getElementById("perPrice").innerText=totalcost;
//    document.getElementById("subPrice").innerText=totalcost;
//    document.getElementById("totalPrice").innerText=totalcost;
editminus("addValue","perPrice",1,1219);
editsubprice("perPrice","perprice","subPrice");
editsubprice("subPrice","taxid","totalPrice");
tax("subPrice","taxid",100,15);
})

const plus1=document.getElementById("plus1");
plus1.addEventListener("click",function(){
    editPlus("addvalue","perprice",1,59);
    editsubprice("perPrice","perprice","subPrice");
    editsubprice("subPrice","taxid","totalPrice");
    tax("subPrice","taxid",100,15);
})

const minus1=document.getElementById("minus1");
minus1.addEventListener("click",function(){
    editminus("addvalue","perprice",1,59);
    editsubprice("perPrice","perprice","subPrice");
    editsubprice("subPrice","taxid","totalPrice");
    tax("subPrice","taxid",100,15);
})

function editPlus(id1,id2,num1,num2){
    const addValue=document.getElementById(id1).value;
   const added=parseFloat(addValue);
   const add=added+num1;
   document.getElementById(id1).value=add;
   const perPrice=document.getElementById(id2).innerText;
   const price=parseFloat(perPrice);
   const total=price+num2;

   document.getElementById(id2).innerText=total;
   
}
function editminus(id1,id2,num1,num2){

    const minusValue=document.getElementById(id1).value;
    const minus=parseFloat(minusValue);
    const minusprice=minus-num1;
    document.getElementById(id1).value=minusprice;
    const protiPrice=document.getElementById(id2).innerText;
    const pric=parseFloat(protiPrice);
    const totalcost=pric-num2;
 
    document.getElementById(id2).innerText=totalcost;
}

function editsubprice(id1,id2,id3){
    const perPrice1=parseFloat(document.getElementById(id1).innerText);
    const perPrice2= parseFloat(document.getElementById(id2).innerText);
    const subPrice=perPrice1+perPrice2;
    document.getElementById(id3).innerText=subPrice;
}

function tax(id1,id2,num1,num2){
    const taxid= parseFloat(document.getElementById(id1).innerText);
    const taxId=Math.round((taxid/num1)*num2);
    document.getElementById(id2).innerText=taxId;
}