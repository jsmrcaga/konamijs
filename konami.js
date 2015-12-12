var konami = {
	_konamiCode : [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
	//code for up up down down left right left right B A
	_index : 0,
	_callback: null,


	onDone: function(fct){
		if(typeof fct == 'undefined'){
			throw new Error("You must define a function for konami code to execute when done");
			return;
		}

		this._callback = fct;
	},
	
	start: function(){
		var parent = this;
		document.onkeydown = function(e){
			if(e.which == parent._konamiCode[parent._index]){
				if(parent._index == parent._konamiCode.length-1){
					console.log("Konami Code Entered");
					parent._callback();
					parent._index = 0;
				}else{
					parent._index++;
				}
			}else{
				parent._index = 0;
			}
		}
	},
}