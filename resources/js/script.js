$(document).ready(function () {

    $(".menu-button").click(function () {
        $(".menu-button").removeClass("selected");
        $(this).addClass("selected");
        let target = $(this).text();

        $(".product-container").removeClass("show");
        $(".product-container[data-page="+target+"]").addClass("show");
    });

    $(".product-wrapper").click(function(){
        $(".modal").removeClass("hidden");
    });

    $(".modal-close").click(function(){
        $(".modal").addClass("hidden");
    });

    $(".fa-minus-square").click(function(){
        let qty = $(this).parent().find(".cart-item-qty");
        $(qty).text(parseInt($(qty).text())-1);
    });

    $(".fa-plus-square").click(function(){
        let qty = $(this).parent().find(".cart-item-qty");
        $(qty).text(parseInt($(qty).text())+1);
    });

    $(".close").click(function(){
        $(this).parent().parent().remove();
    })

});
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// });

