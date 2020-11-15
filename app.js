let theInput = (document.getElementById("input").oninput = function () {
  let theResult = Math.floor((this.value / 14) * 10);
  console.log(typeof theResult);
  let result = document.getElementById("result");

  if (isNaN(this.value)) {
    result.textContent = `متكتب يبني رقم  `;
document.getElementById('xy').play();
           document.getElementById('xyz').pause();

  } else {
    result.textContent = `هيوصلك ${theResult}  جنيه `;
  }
  if (this.value >= 1000000) {
    result.textContent = `😂😂 بتجرب رقم معدي المليون  يبني فوق  انت كحياااان `;
  }
  if (this.value < 0) {
    result.textContent = ` ازي بقي انا عاوز حضرتك تفهني ازي`;
  }
   if(this.value >= 1000000)
{
    document.getElementById('xyz').play();
     document.getElementById('xy').pause();
    
}
    if (this.value >= 100) {
document.getElementById('img').play();
  }
 
});



