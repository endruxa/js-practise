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

