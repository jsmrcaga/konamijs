# konamijs
Implementation of Konami code in Vanilla JS

# Installation

Simply use a script tag after downloading the source files.
We recommend using the minified version for production environments, and the unminified during development.

```html
<script type="text/javascript" src="path/to/js/konami.js"></script>
```

Just be sure to add the script before using it!

# Usage

```javascript
function mySuperFunction () {
	alert('You just entered the Konami Code!');
}

function anotherCrazyFunction () {
	var img = document.createElement("img");
	img.src = "http://bit.ly/1NVtB31";
	document.body.appendChild(img);
}

konami.onDone(function(){
	mySuperFunction();

	anotherCrazyFunction();
});

konami.start();
```

