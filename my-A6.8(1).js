$('document').ready(function (){
/*
Мой вариант решения задачи.

Задаю себе вопрос: Можно ли скодить лучше?
Например: 
- событие клик на странице привязать к проверке была ли нажата одна из трёх кнопок;
- в зависимости от того какая кнопка была нажата результ подствить в написанный код...

Кода был бы меньше..??
Пока не хватает знаний :-\

При прочтении задания мне кажется что можно было написать код проще?
Можно? Как можно было проще скодить данную страницу?

Задание:
Напишите html код с прогрессбаром, тремя кнопками и пометками: “+1%”, “+3%” и “+7%”. 
Нажатие на соответствующую кнопку увеличивает значение прогрессбара. Простейший вариант 
решения: сделать три функции, каждая из которых увеличивает общую переменную со значением 
прогресса на соответствующее значение.

*/
function progressBars(){
$('button[name=freedom]').click(function(){         
  let getWidth = $('#freedom').prop("style");
  let toDigit = parseInt(getWidth['width']);		
  //alert(toDigit);  
  if(toDigit < 100){
    let result = toDigit + 1;
    	if (result > 100) {
    	let result = '100%';  
    	$('#freedom').width(result);
    	alert('Успех!');
  }else if(toDigit != 100){
      	let result = toDigit + 1 + '%';    	  
        $('#freedom').width(result);
        $('#indicator1').html(result);
    		alert('Пока результат не равен 100%');
  			} 
  }else{
    let result = '100%';
    $('#freedom').width(result);
    $('#indicator1').html(result);
    alert('Достигнут максимально возможный результат - 100%')
  }      
});

$('button[name=equality]').click(function(){         
  let getWidth = $('#equality').prop("style");
  let toDigit = parseInt(getWidth['width']);		
  //alert(toDigit);  
  if(toDigit < 100){
    let result = toDigit + 3;
    	if (result > 100) { 
    	let result = '100%';  
    	$('#equality').width(result);
    	alert('Успех!');
  }else if(toDigit != 100){
      	let result = toDigit + 3 + '%';    	  
        $('#equality').width(result);
        $('#indicator2').html(result);
    		alert('Пока результат не равен 100%');
  			} 
  }else{
    let result = '100%';
    $('#equality').width(result);
    $('#indicator2').html(result);
    alert('Достигнут максимально возможный результат - 100%')
  }    
});

$('button[name=brotherhood]').click(function(){         
  let getWidth = $('#brotherhood').prop("style");
  let toDigit = parseInt(getWidth['width']);		
  //alert(toDigit);  
  if(toDigit < 100){
    let result = toDigit + 15;
    	if (result > 100) {
    	let result = '100%';  
    	$('#brotherhood').width(result);
    	alert('Успех!');
  }else if(toDigit != 100){
      	let result = toDigit + 15 + '%';    	  
        $('#brotherhood').width(result);
        $('#indicator3').html(result);
    		alert('Пока результат не равен 100%');
  			} 
  }else{
    let result = '100%';
    $('#brotherhood').width(result);
    $('#indicator3').html(result);
    alert('Достигнут максимально возможный результат - 100%')
  }    
});
$('button[name=allTogether]').click(function(){         
  
  let getWidth = $('#freedom').prop("style");
  let getWidth1 = $('#equality').prop("style");
  let getWidth2 = $('#brotherhood').prop("style");
  
  let toDigit = parseInt(getWidth['width']);    
  let toDigit1 = parseInt(getWidth1['width']);    
  let toDigit2 = parseInt(getWidth2['width']);    
  
  //alert(toDigit);  
  
  if(toDigit < 100 || toDigit1 < 100 || toDigit2 < 100){
    let result = toDigit + Math.ceil(Math.random()*25);
    let result1 = toDigit1 + Math.ceil(Math.random()*25);
    let result2 = toDigit2 + Math.ceil(Math.random()*25);
      if (result > 100  && result1 > 100  && result2 > 100) {
      let result = '100%';  
      let result1 = '100%';  
      let result2 = '100%';  
      $('#freedom').width(result);
      $('#equality').width(result1);
      $('#brotherhood').width(result2);
          $('#indicator1').html(result);
          $('#indicator2').html(result1);
          $('#indicator3').html(result2);
      alert('Успех!');
  }else if(toDigit != 100 || toDigit1 != 100 || toDigit2 != 100){
        let result = toDigit + Math.ceil(Math.random()*25) + '%';
        let result1 = toDigit1 + Math.ceil(Math.random()*25) + '%';
        let result2 = toDigit2 + Math.ceil(Math.random()*25) + '%';
        $('#freedom').width(result);
        $('#equality').width(result1);
        $('#brotherhood').width(result2);
            $('#indicator1').html(result);
            $('#indicator2').html(result1);
            $('#indicator3').html(result2);
        //alert('Пока результат не равен 100%');
        } 
  }else{
    let result = '100%';
    let result1 = '100%';
    let result2 = '100%';
    $('#freedom').width(result);
    $('#equality').width(result1);
    $('#brotherhood').width(result2);
        $('#indicator1').html(result);
        $('#indicator2').html(result1);
        $('#indicator3').html(result2);
    alert('Достигнут максимально возможный результат - 100%')
  }    
});
$('button[name=getResults]').click(function(){         
  
  
  let getWidth = $('#freedom').prop("style");
  let getWidth1 = $('#equality').prop("style");
  let getWidth2 = $('#brotherhood').prop("style");
  
  let toDigit = parseInt(getWidth['width']);    
  let toDigit1 = parseInt(getWidth1['width']);    
  let toDigit2 = parseInt(getWidth2['width']);    
  
  let result = toDigit + '%';
  let result1 = toDigit1 + '%';
  let result2 = toDigit2 + '%';
  
  alert('So so so! What we have got here?\n\n My code works! BUT, it still has some shortcomings!\n For example: the width atribute keeps increase after it have already became 100%\n So we have do some coding to improve it... ufff   \n\n Your freedom now is on level of - '+result+'\n\n Your equality now is on level of - '+result1+'\n\n Your brotherhood now is on level of - '+result2);  
  
     
});
}
progressBars(); 

}); // doc.ready.func.end