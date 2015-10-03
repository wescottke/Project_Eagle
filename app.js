// alert("test")
var toggle = function(){
	console.log("clicked")
	var oldname = document.getElementsByClassName("dot-wrapper")[0].className
	if (oldname.indexOf("visible")>-1){
		document.getElementsByClassName("dot-wrapper")[0].className = "dot-wrapper";
	}else{
		document.getElementsByClassName("dot-wrapper")[0].className = "dot-wrapper visible";
	}
}
