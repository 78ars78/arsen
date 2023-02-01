<html lang="en"><head>
<!--	<meta name="viewport" content="width-device-width, initial-scale-1.0">-->
	<title>Выпадающее меню</title>
<!--	<link href="https://fonts.googleapis.com/css2?famili=Oswald&display=swap" rel="stylesheet">-->
 <link href="Untitled-22.css" rel="stylesheet">
 </head><body>


<div class="container">

<nav>
	<ul>
	    <li data-f="all">ALL</li><br>
		<li data-f="alizarin" class="text-alizarin">ALIZARIN</li><br>
		<li data-f="wisteria" class="text-wisteria">WISTERIA</li><br>
		<li data-f="emerland" class="text-emerland">EMERLAND</li><br>
		<li data-f="sunflower" class="text-sunflower">SUNFLOWER</li>
	</ul>
</nav>
	<div style="position: absolute; left: 200px; top: 0px; ">
 <div class="br col_auto box alizarin"></div>
 <div class="br col_auto box wisteria"></div>
 <div class="br col_auto box emerland"></div>
 <div class="col_auto box alizarin"></div>
 <div class="col_auto box sunflower"></div>
 <div class="col_auto box alizarin"></div>
 <div class="col_auto box wisteria"></div>
 <div class="col_auto box alizarin"></div>
 <div class="col_auto box emerland"></div>
    </div>
</div>



<script> 
	const filterBox = document.querySelectorAll('.box');
	document.querySelector('nav').addEventListener('click',event => {
		if (event.target.tagName !== 'LI') return false;
		let filterClass = event.target.dataset['f'];
	filterBox.forEach(elem => {
			elem.classList.toggle('hide');
			if (!elem.classList.contains(filterClass) && filterClass!=='all') 
			{ elem.classList.toggle('hide'); }	}); }) ;	
</script>


</body></html>

