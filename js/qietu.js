var toutiao = document.getElementById('toutiao');
var daohang = document.getElementById('daohang');
var yule = document.getElementById('yule');
var tiyu = document.getElementById('tiyu');
var qiche = document.getElementById('qiche');
var keji = document.getElementById('keji');
var redT = document.getElementById('redT');
var buttons = document.getElementById('buttons');
var lunbo1 = document.getElementById('lunbo1');
var container = document.getElementById('container');
var  index = 1;
toutiao.onclick = function toutiao()
{
	toutiao1.style.color = "black";
	tiyu1.style.color = "#ADADAD";
	keji1.style.color = "#ADADAD";
	qiche1.style.color = "#ADADAD";
	yule1.style.color = "#ADADAD";
	redT.style.left =  5 + 'rem';
}

yule.onclick = function ()
{
	toutiao1.style.color = "#ADADAD";
	tiyu1.style.color = "#ADADAD";
	keji1.style.color = "#ADADAD";
	qiche1.style.color = "#ADADAD";
	yule1.style.color = "black";
	redT.style.left = 15 + 'rem';
}
tiyu.onclick = function ()
{
	toutiao1.style.color = "#ADADAD";
	tiyu1.style.color = "black";
	keji1.style.color = "#ADADAD";
	qiche1.style.color = "#ADADAD";
	yule1.style.color = "#ADADAD";
	redT.style.left = 25 + 'rem';
}
qiche.onclick = function ()
{
	toutiao1.style.color = "#ADADAD";
	tiyu1.style.color = "#ADADAD";
	keji1.style.color = "#ADADAD";
	qiche1.style.color = "black";
	yule1.style.color = "#ADADAD";
	redT.style.left = 35 + 'rem';
}
keji.onclick = function ()
{
	toutiao1.style.color = "#ADADAD";
	tiyu1.style.color = "#ADADAD";
	keji1.style.color = "black";
	qiche1.style.color = "#ADADAD";
	yule1.style.color = "#ADADAD";
	redT.style.left = 45 + 'rem';
}
button1.onclick = function () 
{
	button1.className = "on";
	button2.className = "";
	button3.className = "";
	list.style.left = 0 + "px";
}
button2.onclick = function () 
{
	button1.className = "";
	button2.className = "on";
	button3.className = "";
	list.style.left = -950 + "px";
	/*var a  = parseInt(list.style.left) - 2800;
	list.style.left = a  + "px";*/

}
button3.onclick = function () 
{
	button1.className = "";
	button2.className = "";
	button3.className = "on";
	list.style.left = -1900 + "px";
}
	function bofang(offset){
		var newleft = parseInt(list.style.left) +offset;
		function go(){
		list.style.left=newleft + 'px';
		if (newleft< -1900){
			list.style.left = 0 + 'px';
		}
		if (newleft> 0){
			list.style.left = -1900 + 'px';
		}
	} 
	go();
}
function m(){
		bofang(-950);
		if(index==3){
			index=1;
		}
		else{
			index +=1;
		}
		//showbutton();
	}

 function play(){
    	timer = setInterval(function(){
    		m();
    	},2000);
    }
play();