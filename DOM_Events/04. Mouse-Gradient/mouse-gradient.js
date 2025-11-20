function attachGradientEvents() {
    const gradientEl=document.querySelector('#gradient');
    const result=document.querySelector('#result');



    gradientEl.addEventListener('mousemove',e=>{
        const currentPosition=e.offsetX;
        const elementWidth=e.currentTarget.clientWidth;
       const  percent=((currentPosition/elementWidth)*100).toFixed(0);
       result.textContent=percent+'%';
        

    }
        
    );
}
