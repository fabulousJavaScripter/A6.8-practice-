$('document').ready(function (){
/*
Мой вариант решения задачи.

Задаю себе вопрос: Можно ли скодить лучше?
Например: 
- событие клик на странице привязать к проверке была ли нажата одна из трёх кнопок;
- в зависимости от того какая кнопка была нажата результ подствить в написанный код...

Кода был бы меньше. 
Пока не хватает знаний :-\
Ебашим!!

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
    let result = toDigit + 35;
    	if (result > 100) {
    	let result = '100%';  
    	$('#freedom').width(result);
    	alert('Успех!');
  }else if(toDigit != 100){
      	let result = toDigit + 35 + '%';    	  
        $('#freedom').width(result);
    		alert('Пока результат не равен 100%');
  			} 
  }else{
    let result = '100%';
    $('#freedom').width(result);
    alert('Достигнут максимально возможный результат - 100%')
  }      
});

$('button[name=equality]').click(function(){         
  let getWidth = $('#equality').prop("style");
  let toDigit = parseInt(getWidth['width']);		
  //alert(toDigit);  
  if(toDigit < 100){
    let result = toDigit + 35;
    	if (result > 100) {
    	let result = '100%';  
    	$('#equality').width(result);
    	alert('Успех!');
  }else if(toDigit != 100){
      	let result = toDigit + 35 + '%';    	  
        $('#equality').width(result);
    		alert('Пока результат не равен 100%');
  			} 
  }else{
    let result = '100%';
    $('#equality').width(result);
    alert('Достигнут максимально возможный результат - 100%')
  }    
});

$('button[name=brotherhood]').click(function(){         
  let getWidth = $('#brotherhood').prop("style");
  let toDigit = parseInt(getWidth['width']);		
  //alert(toDigit);  
  if(toDigit < 100){
    let result = toDigit + 35;
    	if (result > 100) {
    	let result = '100%';  
    	$('#brotherhood').width(result);
    	alert('Успех!');
  }else if(toDigit != 100){
      	let result = toDigit + 35 + '%';    	  
        $('#brotherhood').width(result);
    		alert('Пока результат не равен 100%');
  			} 
  }else{
    let result = '100%';
    $('#brotherhood').width(result);
    alert('Достигнут максимально возможный результат - 100%')
  }    
});
}
progressBars();

}); // doc.ready.func.end