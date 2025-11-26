document.addEventListener('DOMContentLoaded', solve);

function solve() {
const inputFormEl=document.querySelector('#input');


inputFormEl.addEventListener('submit',e=>{
  e.preventDefault();
  
  const inputEl=e.target.querySelector('textarea');
  const data=JSON.parse(inputEl.value);
 const productListEl=document.querySelector('table tbody');
  data.forEach(item => {
    
    
    
    const product=document.createElement('tr');

     const productImgCell=document.createElement('td');
     const productImgEl=document.createElement('img');
     productImgEl.setAttribute('src',item.img)
     productImgCell.append(productImgEl);
     product.append(productImgCell);


    const productNameCell=document.createElement('td');
    productNameCell.textContent=item.name;
    product.append(productNameCell);

    
    const productPriceCell=document.createElement('td');
    productPriceCell.textContent=item.price;
    product.append(productPriceCell);


    const productDecorationCell=document.createElement('td');
    productDecorationCell.textContent=item.decFactor;
    product.append(productDecorationCell);

    
    const productCheckCell=document.createElement('td');
    const productCheckMark=document.createElement('input');
    productCheckMark.setAttribute('type','checkbox');
    productCheckCell.append(productCheckMark);
    product.append(productCheckCell);
    
    productListEl.append(product);

  });
});


const shopFormEl=document.querySelector('#shop');

shopFormEl.addEventListener('submit',e=>{
  e.preventDefault();
  console.log(e.target);

  const outputEl=e.target.querySelector('textarea');
  let rows=e.target.querySelectorAll(' table tbody tr:has(input:checked)');
 rows=[...rows].map(row=>(
  {name:row.children[1].textContent.trim(),
   price: Number ( row.children[2].textContent),
   decFator:Number ( row.children[3].textContent)

  }));
  console.log(rows);
  console.log(rows.map(el=>el.name));
  console.log(rows.map(el=>el.price));
  let output=`Bought furniture: ${rows.map(el=>el.name).join(', ')}\n`

     output+=`Total price: ${rows.reduce((acc,el)=>acc+el.price,0)}\n`;

     output+=`Average decoration factor: ${((rows.reduce((acc,el)=>acc+el.decFator,0))/rows.length).toFixed(2)}`
  
  
outputEl.value=output;


});
}