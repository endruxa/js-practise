//перемещение блока div
body.addEventListener('click', function (event) {
    if (event.ctrlKey) {
        console.log(event.offsetX, ' ', event.offsetY)
        menu.style.left = ( (event.pageX >= 25) ? event.pageX - 25 : 0) + 'px';
        menu.style.top = ( (event.pageY >= 25) ? event.pageY - 25 : 0) + 'px';
    }
});




/*body.addEventListener('keypress', function (event) {
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
});*/


/*
var p = document.getElementById("id1");
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

