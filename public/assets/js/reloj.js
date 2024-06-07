var clock = new Vue({
	el: '#orologio',
	data: {
			ora: '',
			data: ''
	}
});

var nomeMese = ["ENERO", "FEBRERO", "MARZO", "APRIL", "MAYO","JUNIO","JULIO", "AGOSTO", "SETIEMBRE", "OCTUBRE", "NOVIEMBRE","DICIEMBRE"];

var d = new Date();



var giorno = ['DOMINGO', 'LUNES', 'MARTES', 'MERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
	var cd = new Date();
	clock.ora = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
	clock.data = giorno[cd.getDay()] + ' ' + zeroPadding(cd.getDate(), 2) + ' ' + nomeMese[d.getMonth()] + ' ' + zeroPadding(cd.getFullYear(), 4);

};

function zeroPadding(num, digit) {
	var zero = '';
	for(var i = 0; i < digit; i++) {
			zero += '0';
	}
	return (zero + num).slice(-digit);
}