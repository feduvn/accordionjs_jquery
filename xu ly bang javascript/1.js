var tieuDeClick = document.querySelectorAll('.acc .noidung .tieude'),
    cacPhanTu = document.querySelectorAll('.acc .noidung ');
 
for (let index = 0; index < tieuDeClick.length; index++) {
     tieuDeClick[index].addEventListener('click',function(){
        //  console.log("click vao phan thu thu" + index);
        var test = this.parentNode.className.indexOf('active') > -1;
        
        if(test == true) {  // click vao chinh no              
            for (let i = 0; i < cacPhanTu.length; i++) {
                cacPhanTu[i].classList.remove('active');           
             }
        }
        else {            
            for (let i = 0; i < cacPhanTu.length; i++) {
                cacPhanTu[i].classList.remove('active');           
             }
             this.parentNode.classList.add('active');
        }
         


       
        
     })
    
}
 