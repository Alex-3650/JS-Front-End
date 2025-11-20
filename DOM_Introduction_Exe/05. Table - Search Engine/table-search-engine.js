function solve() {
   const students=document.querySelectorAll('tbody tr ')
   const searchStr=document.querySelector('#searchField').value.toLowerCase();

   if(searchStr=='') return;
  
   students.forEach(student=>{
         student.classList.remove('select');
      if(student.textContent.toLowerCase().includes(searchStr)){
         student.classList.add('select');
      }
   })
}

