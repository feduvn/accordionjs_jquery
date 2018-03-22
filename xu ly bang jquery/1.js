  $(function(){
      $('.noidung .tieude').click(function(){
          if($(this).parent().hasClass('active')){
            $(".noidung").removeClass('active');
          }
          else 
          {
            $(".noidung").removeClass('active');
            $(this).parent().addClass('active')
          }
          
      })
  })