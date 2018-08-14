var b = 0;
var htm = $('<p> 1 <i>2</i></p>');
var objects = [
	{name: 'Вася', surname: 'Иванов'},
	{name: 'Леонид', surname: 'Сидоров'}
];

function getData() {
	for (let i in objects)
		$('#id1').append(getStructureObject(objects[i]));

	//$('<div class="color2">AAA</div>').insertBefore('#id1');
	//$('.color2').first().replaceWith('');

	$('p').replaceAll('<div class="color">BBB</div>');
}

function getStructureObject(obj) {
	var htm = $('<p><b>' + obj.name + '</b><i>' + obj.surname + '</i></p>');
	return htm;
}


/*function getData() {
	for (let i in objects)
		$('#id1').append(getStructureObject(objects[i]));

	$('<div class="color2">AAA</div>').insertBefore('#id1');
}

function getStructureObject(obj) {
	var htm = $('<p><b>' + obj.name + '</b><i>' + obj.surname + '</i></p>');
	return htm;
}


/*var b = 0;
var htm = $('<p> 1 <i>2</i></p>');
var objects = [
	{name: 'Вася', surname: 'Иванов'},
	{name: 'Леонид', surname: 'Сидоров'}
];

function getData() {
	for (let i in objects)
		$('#id1').append(getStructureObject(objects[i]));

	$('#id1').wrapInner('<div class="color2"></div>');
}

function getStructureObject(obj) {
	var htm = $('<p><b>' + obj.name + '</b><i>' + obj.surname + '</i></p>');
	return htm;
}


/*var b = 0;
var htm = $('<p> 1 <i>2</i></p>');
var objects = [
	{name: 'Вася', surname: 'Иванов'},
	{name: 'Леонид', surname: 'Сидоров'}
];

function getData() {
	for (let i in objects)
	$('#id1').prepend(getStructureObject(objects[i]));

	for (let i in objects)
		getStructureObject(objects[i]).prependTo('#id1')
}

function getStructureObject(obj) {
	var htm = $('<p><b>' + obj.name + '</b><i>' + obj.surname + '</i></p>');
	return htm;
}

/*

var objects = [
	{name: 'Вася', surname: 'Иванов'},
	{name: 'Леонид', surname: 'Сидоров'}
]
function getData(id) {
	for (let i in objects)
	$('#id1').append(getStructureObject(objects[i]));
}

function getStructureObject(obj) {
	var htm = $('<p><b>' + obj.name + '</b><i>' + obj.surname + '</i></p>');
	return htm;
};
*/

/*var object = {name: 'Вася', surname: 'Иванов'};

function getData(id) {
	$('#id1').append(getStructureObject(object));

function getStructureObject(obj) {
	var htm = $('<p><b>' + obj.name + '</b><i>' + obj.surname + '</i></p>');
	return htm;
}
	//console.log(htm);
	//var array = $('#menu').html(htm)
}
/*var b = 0;
var htm = $('#id1').html();
function getData(id) {
	$('#id1').prepend(function () {
		b++;
		return '<p>' + b + '</p>' + htm;
	});
	//console.log(htm);
	//var array = $('#menu').html(htm)
}
/*var b = 0;

function getData(id) {
	var htm = $('#id1').append(function () {
 		b++;
 		return '<p>' + b + '</p>';
	});
	//console.log(htm);
	//var array = $('#menu').html(htm)
}

/*
var array = $('#id1').clone()[0];
console.log(array);
	function getData(id) {
	var htm = $('#id1').clone()[0];
	console.log(htm);
	var array = $('#menu').html(htm)
}

/*var array = $('#id1').html('<p>111</p>');
	console.log(array);
function getData(id) {
	var htm = $('#id1').html();
	var array = $('#id1').html('<p>111</p>' + htm);
}
/*
var array = $('#id1').css({
	'background': 'red',
		'font-size': 20,
		'height': '1000px'
	});
var array = $('#id1').css('height');
	console.log(array)

*/

//добавить в корзину товар
/*var bucket = [];
function getData(id) {
	let obj = $('#' + id).data();
	bucket.push(obj);
	console.log(obj
	//	$('#dd1').prop('textContent')
	);
	$('#' + id).removeAttr('class');// удалить аттрибут
}

 /*var array = $('#id1').data();
 array.date = {t1999: "fwgwagw"};
 array.data = '';
 $('#id1').removeData('data');

 console.log(
 $('#dd1').prop('textContent')
 );
*/
/*var array = $('#id1').prop('class', 'tab');
console.log(
	$('#id1').prop('class')
);
console.log(
	$('#id1').attr('class', 'ttt')
);
console.log(
	$('#id1').attr('class')
);
var array = $('h1').is(function () {
	if ($(this).eq(0).children().length > 0) {
		return true;
	} else {
		$(this).eq(0).css('display', 'none')
		return false
	}
});
for (var i = 0; i < array.length; i++) {
	//array.eq(i).css('display', 'none');
	array.eq(i).css('font-size', (10 * (i + 1)) + 'px')
	array.eq(i).css('color', 'red')
}*/
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

