
$(document).ready(function(){

 
    
      var body = document.getElementById("products");
      for(var i=0;i<24;i++){
      var ShowProduct = document.createElement("div");
      ShowProduct.className ="item col-xs-3 col-lg-3";
      ShowProduct.innerHTML =  "<div class='thumbnail'>"+
              "<img class='group list-group-image' src='../img/img.jpg' alt='' />"+
              "<div class='caption' >"+
                  "<h4 class='group inner list-group-item-heading'>Product title</h4>"+
                  "<p class='group inner list-group-item-text'>"+
                      "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"+
                      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>"+
                      "<div class='row' >"+
                          "<div class='col'>"+
                              "<p class='lead'>"+
                                  "$21.000</p>"+
                          "</div>"+
                          "<div class='col'>"+
                              "<button class='btn btn-info ' data-toggle='modal' data-target='.bd-example-modal-lg' >รายละเอียด</button>"+
                          "</div>"+
                          "<div class='col'>"+
                            "<button class='btn btn-success' href=' '><i class='material-icons' style='font-size:14px'>shopping_basket</i>ใส่ตระกร้า</button>"+
                          "</div>"+
                      "</div>"+
              "</div>"+
          "</div>";
            body.appendChild(ShowProduct);
       }
    
    
    });