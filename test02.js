(function($,window){
  $(function(){
//
//01
$('h2').remove();

//02
var title=$('#index').text(); //文字のみ帰ってくる
alert(title);

var title=$('#index').html(); //タグも帰ってくる
alert(title);

//03
$('#index').append('<Li>メゾット</li>');
});



//04
$('#index').find('li').each(function(){
  alert($(this).text().length);
 
 
});

//05
$('#index').find('li').each(function(){
  var count=$(this).text().length;
  $(this).append(count);
});



})(jQuery, window);
