var acc= document.getElementsByClassName('accordian')
var i;
var len = acc.length;
for(i =0; i < len; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active'); 
        var panel=this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
            panel.style.padding= "0";
        } else{
            panel.style.maxHeight = 1000 + 'px';
            panel.style.paddingTop= " 1.5rem";
            panel.style.paddingBottom= " 1.5rem";
        }
    })
}