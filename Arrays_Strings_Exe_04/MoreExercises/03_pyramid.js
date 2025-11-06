function solve(base,increment) {
   
    const materials=[];
    materials['Stone']=0;
    materials['Marble']=0;
    materials['Lapis Lazuli']=0;
    materials['Gold']=0;

    
    const layers=Array.from(
        {length: Math.ceil(base/2)},
        (_,i)=>{ return base - ( i * 2);
    });

    const pyramidHeight=layers.reduce((height,layerSides,index)=>{
        
         
        
        materials['Stone']+= ((layerSides)*(layerSides) -(4*layerSides-4))*increment
    

        if((index+1)%5==0){
        materials['Lapis Lazuli'] +=(4*layerSides-4)*increment;
    
        }else{
            materials['Marble'] +=(4*layerSides-4)*increment;
        }
        
        
          return ++height;
          

    },0) 

    if(base%2==0){
          
        if(base%5==0){
            materials['Gold'] =4*increment;
             materials['Lapis Lazuli']-=materials['Gold'];
        }else{
           materials['Gold'] =4*increment; 
           materials['Marble']-=materials['Gold'];
        }
    }else{
          
         materials['Gold'] =1*increment; 
           materials['Stone']-=materials['Gold'];
    }
    
       Object.keys(materials).forEach((value)=>{

        console.log(`${value} required: ${Math.ceil(materials[value])}`);
       })
       
        console.log(`Final pyramid height: ${Math.floor(pyramidHeight*increment)}`);
}

solve(11,1);