
function add(){
	let para=document.getElementById("addinput");
	let tex=document.createTextNode("காய்கறி :");
	para.appendChild(tex);
	let add=document.createElement("select");
	add.setAttribute("class","addsel");

	let op=document.createElement("option");
	op.value="0";
	op.text="தேர்வு செய் ";
	
	let op1=document.createElement("addop");
	op1.value="குடைமிளகாய்";
	op1.text="குடைமிளகாய்";
	
	let op2=document.createElement("option");
	op2.value="சௌ சௌ";
	op2.text="சௌ சௌ";
	
	let op3=document.createElement("option");
	op3.value="சின்ன வெங்காயம்";
	op3.text="சின்ன வெங்காயம்";
	
	let op4=document.createElement("option");
	op4.value="பெரிய வெங்காயம்";
	op4.text="பெரிய வெங்காயம்";
	
	let op5=document.createElement("option");
	op5.value="பச்சைமிளகாய்";
	op5.text="பச்சைமிளகாய்";
	
	let op6=document.createElement("option");
	op6.value="வெள்ளரிக்காய்";
	op6.text="வெள்ளரிக்காய்";
	
	let op7=document.createElement("option");
	op7.value="காலிஃபிளவர்";
	op7.text="காலிஃபிளவர்";
	
	let op8=document.createElement("option");
	op8.value="பீன்ஸ்";
	op8.text="பீன்ஸ்";
	
	let op9=document.createElement("option");
	op9.value="அவரைக்காய்";
	op9.text="அவரைக்காய்";
	
	let op10=document.createElement("option");
	op10.value="தக்காளி";
	op10.text="தக்காளி";
	
	let op11=document.createElement("option");
	op11.value="வெண்டைக்காய்";
	op11.text="வெண்டைக்காய்";
	
	let op12=document.createElement("option");
	op12.value="கத்தரிக்காய்";
	op12.text="கத்தரிக்காய்";
	
	let op13=document.createElement("option");
	op13.value="முருங்கைக்காய்";
	op13.text="முருங்கைக்காய்";
	
	let op14=document.createElement("option");
	op14.value="கோவைக்காய்";
	op14.text="கோவைக்காய்";
	
	let op15=document.createElement("option");
	op15.value="இஞ்சி";
	op15text="இஞ்சி";
	
	let op16=document.createElement("option");
	op16.value="முட்டைகோஸ்";
	op16.text="முட்டைகோஸ்";

	let op17=document.createElement("option");
	op17.value="புடலங்காய்";
	op17.text="புடலங்காய்";
	
	let op18=document.createElement("option");
	op18.value="சுரைக்காய்";
	op18.text="சுரைக்காய்";
	
	let op19=document.createElement("option");
	op19.value="பாகற்காய்";
	op19.text="பாகற்காய்";
	
	let op20=document.createElement("option");
	op20.value="கத்தரிக்காய்";
	op20.text="கத்தரிக்காய்";
	
	let op21=document.createElement("option");
	op21.value="வாழை";
	op21.text="வாழை";
	
	let op22=document.createElement("option");
	op22.value="கொத்தவரங்காய்";
	op22.text="கொத்தவரங்காய்";
	
	let op23=document.createElement("option");
	op23.value="பீர்க்கங்காய்";
	op23.text="பீர்க்கங்காய்";
	
	let op24=document.createElement("option");
	op24.value="காளான்";
	op24.text="காளான்";
	
	let op25=document.createElement("option");
	op25.value="முள்ளங்கி";
	op25.text="முள்ளங்கி";
	
	let op26=document.createElement("option");
	op26.value="பீட்ரூட்";
	op26.text="பீட்ரூட்";
	
	let op27=document.createElement("option");
	op27.value="கேரட்";
	op27.text="கேரட்";
	
	let op28=document.createElement("option");
	op28.value="உருளைக்கிழங்கு";
	op28.text="உருளைக்கிழங்கு";
	
	let op29=document.createElement("option");
	op29.value="எலுமிச்சைப்பழம்";
	op29.text="எலுமிச்சைப்பழம்";
	
	let op30=document.createElement("option");
	op30.value="கொத்தமல்லி";
	op30.text="கொத்தமல்லி";
	
	let op31=document.createElement("option");
	op31.value="சேனைக் கிழங்கு";
	op31.text="சேனைக் கிழங்கு";
	
	let op32=document.createElement("option");
	op32.value="சேப்பங் கிழங்கு";
	op32.text="சேப்பங் கிழங்கு";
	
	let op33=document.createElement("option");
	op33.value="கருணைக் கிழங்கு";
	op33.text="கருணைக் கிழங்கு";
	
	let op34=document.createElement("option");
	op34.value="மாங்காய்";
	op34.text="மாங்காய்";
	
	add.appendChild(op);
	/*add.appendChild(op1);
	add.appendChild(op2);*/
	
	add.append(op1,op2,op3,op4,op5,op6,op7,op8,op9,op10,op11,op12,op13,op14,op15,op16,op17,op18,op19,op20,op21,op22,op23,op24,op25,op26,op27,op28,op29,op30,op31,op32,op33,op34);
	
	/*for(let i=1;i<=35;i++){
	add.append(op+i);
	}*/
	
	document.getElementById("veg").appendChild(add);
	para.appendChild(add);
	let k=document.createTextNode(" Kg:");
	para.appendChild(k);
	let inp=document.createElement("input");
	inp.setAttribute("class","kilo");
	inp.setAttribute("type","number");
	inp.setAttribute("size","5");
	inp.setAttribute("display","block");
	inp.setAttribute("value","");
	para.appendChild(inp);
	let bre=document.createElement("p");
	bre.setAttribute("class","addinput");
	para.appendChild(bre);
	di.appendChild(para);
	<!--document.getElementById()"form1").appendChild(para);-->
}
function whatsapp(){
	var nam=document.getElementById("name").value;
	var hence=document.getElementById("text-area").value;
	var ad=document.querySelectorAll(".addsel");
	var inp=document.querySelectorAll(".kilo");
	var uri="https://wa.me/9840526787?text=";
	var str="";
	var str1="%0a";

	for(let i=0;i<ad.length;i++){
	if(ad[i].value==="தேர்வு செய்"){
	break;
	}
	str=str+ad[i].value+" : "+String(inp[i].value)+"Kg"+str1;
	}
	str=str.substring(0,str .length-3);
	var url=uri+nam+str1+str+str1+hence;
	//var opt=document.querySelectorAll("option");
	//alert(opt.length);
	window.open(url, '_blank').focus();




}
