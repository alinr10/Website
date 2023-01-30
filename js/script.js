const searchbtn=document.querySelector(".search-btn");

const search=document.querySelector(".search-form");
const shoppingbtn=document.querySelector(".shopping-cart");
const shopping=document.querySelector(".cart-item");
const menubtn=document.querySelector(".menu-btn");
const menu=document.querySelector(".navbar");


searchbtn.addEventListener("click",function(){
search.classList.toggle("active");
document.addEventListener("click" ,function(e){


if(!e.composedPath().includes(searchbtn) && !e.composedPath().includes(search) ){
    search.classList.remove("active");
}


});

});


shoppingbtn.addEventListener("click",function(){
    shopping.classList.toggle("active");
    document.addEventListener("click" ,function(e){
    
    
    if(!e.composedPath().includes(shoppingbtn) && !e.composedPath().includes(shopping) ){
        shopping.classList.remove("active");
    }
    
    
    });
    
    });
    
    menubtn.addEventListener("click",function(){
        menu.classList.toggle("active");
        document.addEventListener("click" ,function(e){
        
        
        if(!e.composedPath().includes(menubtn) && !e.composedPath().includes(menu) ){
            menu.classList.remove("active");
        }
        
        
        });
        
        });