var array = $('').is(function () {
	console.log($(this).eq(0).);
	return true;
});

//array = array.filter(':contains("hello")');
for (var i = 0; i < array.length; i++) {
	//array.eq(i).css('display', 'none');
	array.eq(i).css('font-size', (10 * (i + 1)) + 'px')
	array.eq(i).css('color', 'red')
}
/*var array = $('p').each(function (index, elem) {
	elem.style = 'font-size:' + (10 * (index + 1)) + 'px'
});*/
/*for (var i = 0; i < array.length; i++) {
	array.eq(i).css('font-size', (10 * (i + 1)) + 'px')
	array.eq(i).css('color', 'red')
	array.eq(i).prop("disabled", false)
}*/

/*var array = $(':disabled');
for (var i = 0; i < array.length; i++) {
	array.eq(i).css('font-size', (10 * (i + 1)) + 'px')
	array.eq(i).css('color', 'red')
	array.eq(i).prop("disabled", false)
}*/
/*var array = $('p:contains("hello")');//(' + 'hello' + ')
console.log(array.slice(1, 4));
for (var i = 0; i < array.length; i++) {
	array.eq(i).css('font-size', (10 * (i + 1)) + 'px')
	array.eq(i).css('color', 'red')
}*/


//console.log($('.data .tab'))//селектор по классу

/*
console.log($('p').eq(0).css('font-size', '40px'));
$('p').eq(1).css('font-size', '30px');
//перебор всех p и увеличение размера шрифта
var array = $('body div p');// ('p')
	for (var i = 0; i < array.length; i++) {
		array.eq(i).css('font-size', (10 * (i + 1)) + 'px')
}
*/

//console.log($('div.data').css('background', 'blue'));

//jquery выбор всех элементов страницы
//console.log($('*'));

/*body.addEventListener('click', function (event) {
    if (event.ctrlKey) {
        console.log(event.offsetX, ' ', event.offsetY)
        menu.style.left = ( (event.pageX >= 25) ? event.pageX - 25 : 0) + 'px';
        menu.style.top = ( (event.pageY >= 25) ? event.pageY - 25 : 0) + 'px';
    }
});


body.addEventListener('keypress', function (event) {
    console.log(event.target)
})


dd1.onclick = function (e) {
    e.stopPropagation();
};


body.addEventListener('oncopy', function (event) {
    var clipboard = (event || window.event).clipboardData;
    if (clipboard){
        console.log('Произошло копирование');
    }
    //console.log(event.charCode);
});


body.addEventListener('click', function (event) {
    if (event.altKey && event.ctrlKey) {
        console.log(event.x, '', event.y)
    } else {
        console.log(event.offsetX, '', event.offsetY)
    }
});
*/

/*var p = document.getElementById("id1");
p.addEventListener("click", clickP);
var k = 0,
	n = document.getElementById('dd');

function clickP(event) {
	//console.log(event.target.innerHTML);
	//event.target.innerHTML = Number(event.target.innerHTML) + 1;
	//n.style.color = 'red';
	parentE1(d[0]);
	}

	function parentE1(obj) {
		if (obj.parentNode != null) {
			console.log(obj.parentNode);
			parentE1(obj.parentNode);
		}
	}
	
var d = document.getElementsByTagName('p');
*/

