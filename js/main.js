



let chef=[{image:"chef1.jpg",name:"Walter White",position:"Master Chef",icon1:"bi bi-twitter" ,icon2:"bi bi-whatsapp",icon3:"bi bi-linkedin",icon4:"bi bi-instagram"},
           {image:"chef3.jpg",name:"Sarah Jhonson",position:"patiseier",icon1:"bi bi-twitter" ,icon2:"bi bi-whatsapp",icon3:"bi bi-linkedin",icon4:"bi bi-instagram"},
           {image:"chef2.jpg",name:"William Anderson",position:"cook",icon1:"bi bi-twitter" ,icon2:"bi bi-whatsapp",icon3:"bi bi-linkedin",icon4:"bi bi-instagram"}
		



]



chef.map(e=>{




var row=document.getElementById("row")

var div1=document.createElement("div")
div1.setAttribute("class","col-lg-4 col-12 col-md-6 position-relative")


var div2=document.createElement("div")
div2.setAttribute("class","img-div")

var photo=document.createElement("img")
photo.setAttribute("src",e.image)
photo.style.width="100%"
photo.style.margin="100px 0px"



var div5=document.createElement("div")
div5.setAttribute("class","up   text-center  ")

var div3=document.createElement("div")
div3.setAttribute("class","content   pad py-4 bg-light ")



var master=document.createElement("p")
master.setAttribute("class","para-1")
master.innerHTML=(e.name)


var position=document.createElement("p")
position.setAttribute("class","para-2")
position.innerHTML=(e.position)

var div4=document.createElement("div")
div4.setAttribute("class"," text-center ")


var icon1=document.createElement("i")
icon1.setAttribute("class",e.icon1)
icon1.style.padding="0px 10px"


var icon2=document.createElement("i")
icon2.setAttribute("class",e.icon2)
icon2.style.padding="0px 10px"


var icon3=document.createElement("i")
icon3.setAttribute("class",e.icon3)
icon3.style.padding="0px 10px"


var icon4=document.createElement("i")
icon4.setAttribute("class",e.icon4)
icon4.style.padding="0px 10px"




row.append(div1);
div1.append(div2);
div2.append(photo);
div1.append(div5);
div3.append(master);
div3.append(position);
div3.append(div4);
div5.append(div3)

div4.append(icon1);
div4.append(icon2);
div4.append(icon3);
div4.append(icon4);

})
