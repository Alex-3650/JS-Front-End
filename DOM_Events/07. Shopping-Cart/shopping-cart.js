document.addEventListener('DOMContentLoaded', solve)

function solve() {

   function addProduct(e){
        if(e.target.nodeName==='BUTTON'){
      const product=[...e.target.closest('.product').children][1].textContent.trim().replaceAll('\n',' ').split(' ')[0];
      const price=products[product];
    
       document.querySelector('textarea').value+=`Added ${product} for ${price.toFixed	(2)} to the cart.\n`;
       if(!productList.includes(product)){
         productList.push(product);
       }
      
       totalPrice+=price;
      }
      
   };



   const product=document.querySelectorAll('.product-title');
   const prices=document.querySelectorAll('.product-line-price');
   let products={};
   const productList=[];
   let totalPrice=0;
  for (let i = 0; i < [...product].length; i++) {
   
    products[product[i].textContent]=Number([...prices][i].textContent);
  }
  
 document.querySelector('.shopping-cart').addEventListener('click',addProduct);

  document.querySelector('.checkout').addEventListener('click',e=>{
   document.querySelector('.shopping-cart').removeEventListener('click',addProduct);
   if(productList.length==0){
      document.querySelector('textarea').value+=`The trolley is empty!`;
   }else{
      document.querySelector('textarea').value+=`You bought ${productList.toString()} for ${totalPrice.toFixed(2)}.`;
   }
   
  })
}
