// JavaScript Document

/*	const tabl= document.getElementsByClassName('cl').width='500';*/
	
	
	const cre= document.querySelector('#p');
/*	const tablColor= document.querySelector('#tab');
*/	
	
	
let d=0;	
	const img= document.getElementById('1');
	 let k=0;
const interval= setInterval( function(){
	 k=k+Math.random();
   /*img.src="Harley-Davidson.jpg";*/
	const ran= img.style['margin-left']=20*k;
	
	if(d==1) {	return clearInterval(interval);}
	else {
   if (ran > 1100 ) { clearInterval(interval); d=1; cre.style['top']=50; return cre.innerHTML="АРСЕН <font color=black>  выиграл! </font>"; }}

		
},70);
	
	
	
	
	
	
		const img1= document.getElementById('2');
	 let l=0;
const interval1= setInterval( function(){
	 l=l+Math.random();
   /*img.src="Harley-Davidson.jpg";*/
   const ran1= img1.style['margin-left']=20*l;
	
	if(d==1) {	return clearInterval(interval1);} else {
	
   if (ran1 >1100) { clearInterval(interval1); d=1;  cre.style['top']=200; return cre.innerHTML="МАМА <font color=black>  выиграла! </font>";}}
	
		
},70);
	
	
	
	
	
	
	
	
	
		const img2= document.getElementById('3');
	 let p=0;
const interval2= setInterval( function(){
	 p=p+Math.random();
   /*img.src="Harley-Davidson.jpg";*/
   const ran2= img2.style['margin-left']=20*p;
	
	if(d==1) {	return clearInterval(interval2);} else {
   if (ran2 > 1100 ) { clearInterval(interval2); d=1; cre.style['top']=350;  return cre.innerHTML="МИША <font color=black>  выиграл! </font>";}}
	
		
},70);
	
	
	
	
	
	
		const img3= document.getElementById('4');
	 let o=0;
const interval3= setInterval( function(){
	 o=o+Math.random();
   /*img.src="Harley-Davidson.jpg";*/
   const ran3= img3.style['margin-left']=20*o;
	
	if(d==1) {	return clearInterval(interval3);} else {
   if (ran3 > 1100 ) { clearInterval(interval3); d=1; cre.style['top']=500;  return cre.innerHTML="ВЕРОНИКА <font color=black>  выиграла! </font>";}}
	
		
},70);
	
	
