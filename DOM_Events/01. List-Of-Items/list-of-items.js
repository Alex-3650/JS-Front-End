function addItem() {
  const newItemValue=  document.querySelector('#newItemText').value;
  const listElement= document.querySelector('#items');
  const newItem = document.createElement('li');
  if( document.querySelector('#newItemText').value.trim().length==0)
    return;
 
  newItem.textContent=newItemValue;

  listElement.appendChild(newItem);
}
 
