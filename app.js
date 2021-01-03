let theInput = (document.getElementById("input").oninput = function () {
  let theResult = Math.floor((this.value / 14) * 10);
  console.log(typeof theResult);
  let result = document.getElementById("result");

  if (isNaN(this.value)) {
    result.textContent = `  إكتب رقم صحيح يبنى بدل م أجيب الخنجرين وأجيلك`;
document.getElementById('vid1').play();
          document.getElementById('vid1').style.visibility = "visible";
 document.getElementById('vid').style.visibility = "hidden";
document.getElementById('vid').pause();
      document.getElementById('vid').currentTime = 0;

  } else {
    result.textContent = `الرصيد اللي هيوصلك ${theResult}  جنيه `;


      
 document.getElementById('vid').style.visibility = "hidden";
document.getElementById('vid').pause();
      document.getElementById('vid').currentTime = 0;
      
      
      
      document.getElementById('vid1').pause();
          document.getElementById('vid1').style.visibility = "visible";
       document.getElementById('vid1').style.visibility = "hidden";
            document.getElementById('vid1').currentTime = 0;
      
        document.getElementById('vid2').pause();
           document.getElementById('vid2').style.visibility = "hidden";

 document.getElementById('vid2').currentTime = 0;
      
        document.getElementById('vid3').pause();
           document.getElementById('vid3').style.visibility = "hidden";

 document.getElementById('vid3').currentTime = 0;



  }
    
  if (this.value >= 1000000) {
    result.textContent = ` إنت يبني عمرك مسكت أكتر من 25 جنيه ف ايدك متفوووووق يبني بس أنا هطلع جدع معاك 
يتشحن${theResult}  جنيه    `;
  }
  
   if(this.value >= 1000000)
{
    
    document.getElementById('vid').style.visibility = "visible";
document.getElementById('vid').play();

    document.getElementById('vid1').pause();
          document.getElementById('vid1').style.visibility = "visible";
       document.getElementById('vid1').style.visibility = "hidden";
            document.getElementById('vid1').currentTime = 0;
    
    
        document.getElementById('vid2').pause();
           document.getElementById('vid2').style.visibility = "hidden";

 document.getElementById('vid2').currentTime = 0;
    
     document.getElementById('vid2').currentTime = 0;
      
        document.getElementById('vid3').pause();
           document.getElementById('vid3').style.visibility = "hidden";

 document.getElementById('vid3').currentTime = 0;


}
  
        if  ((this.value >=999) && (this.value < 10000))
            
{
        result.textContent = `على أساس إنك ممكن تشحن ${theResult}  جنيه `;

    document.getElementById('vid2').play();
    
       document.getElementById('vid2').style.visibility = "visible";

    
        document.getElementById('vid1').pause();
           document.getElementById('vid1').style.visibility = "hidden";

 document.getElementById('vid1').currentTime = 0;
    
    
        document.getElementById('vid').pause();
           document.getElementById('vid').style.visibility = "hidden";

 document.getElementById('vid').currentTime = 0;
    
}

    
           if  ((this.value >=10000) && (this.value < 100000))
{
        result.textContent = `هتجيب  منين فلوس علشان تشحن ب ${theResult}  جنيه `;

    document.getElementById('vid3').play();
    
       document.getElementById('vid3').style.visibility = "visible";

    
        document.getElementById('vid1').pause();
           document.getElementById('vid1').style.visibility = "hidden";

 document.getElementById('vid1').currentTime = 0;
    
    
        document.getElementById('vid').pause();
           document.getElementById('vid').style.visibility = "hidden";

 document.getElementById('vid').currentTime = 0;
    
    
    
         document.getElementById('vid2').pause();
           document.getElementById('vid2').style.visibility = "hidden";

 document.getElementById('vid2').currentTime = 0;
    
    
}


});


