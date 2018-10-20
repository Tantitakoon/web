$(document).ready(function(){
    var map={};
      
    var toyota=['camry','revo','vigo','fortuner'];
    var honda=['civic','accordG8','accordG9','accordG7'];
    init();
    function init(){
        map['toyota'] = toyota;
        map['honda'] = honda;
    }
    
    $("#selectBrand").click(function(){
        var brandValue = document.getElementById("selectBrand").value;
     
        var selectModel = document.getElementById("selectModel");
        var countChild = document.getElementById("selectModel").childElementCount;
        
        console.log(countChild);
        //console.log(map[brandValue].length);
        for(var i =0 ;i<countChild;i++){
            selectModel.removeChild(selectModel.childNodes[0]);
           // console.log(selectModel.childNodes[0].value);
        } 
        for(var i = 0 ; i<map[brandValue].length ;i++){
           
                var ShowProduct = document.createElement("option");  
                var txt= document.createTextNode(`${map[brandValue][i]}`);
                ShowProduct.appendChild(txt);
                var att = document.createAttribute("value");
                att.value =`${map[brandValue][i]}` 
                console.log(ShowProduct);
                selectModel.appendChild(ShowProduct);
            
            
            
        }
       
        

    });
    
   
});