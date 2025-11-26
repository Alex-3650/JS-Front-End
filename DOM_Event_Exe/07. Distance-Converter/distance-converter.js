document.addEventListener('DOMContentLoaded', solve);

function solve() {
  document.querySelector('#convert').addEventListener('click',e=>{
    e.preventDeafault();
     const input=Number(document.querySelector('#inputDistance').value);

  const metrics={km:1000,m:1,cm:0.01,mm:0.001,mi:1609.34,yrd:0.914,ft:0.3048,in:0.0254}
  const inputUnit=document.querySelector('#inputUnits').value;
  const inputValue=metrics[inputUnit]*input;

  const outputUnit=document.querySelector('#outputUnits').value;
  const outputValue=inputValue/metrics[outputUnit];

  const output=document.querySelector('#outputDistance');
  output.value=(outputValue).toFixed(2);



  })



}