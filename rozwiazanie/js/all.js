$(function(){
   $('form').submit(function(){
      var $form = $(this);
      var values = $form.find('input[name="character"]:checked').map(function(){
          return this.value;
      });

       var only_dark_side = _(values).every(function(value){
           return value == 'dark_side';
       });

       if (values.length && only_dark_side){
           var audio = new Audio('imperial_march.mp3');
           audio.play();
           return false;
       }
   });
});