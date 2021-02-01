
fetch("https://suneetha-103.github.io/ecommers/data/data.json").then(response=>{
return response.json()
}).then(data=>{
console.log(data)
displayData(data)
})
function displayData(info)
{

  var bodyElement=document.querySelector("body");
var row=document.createElement("Selection")
row.classList.add("row","justify-content-center")
bodyElement.append(row)
info.mobiles.map(value=>{
	var column=document.createElement("article")
	column.classList.add("col-sm-10","col-md-6","col-lg-3")
	row.append(column)
	//card
	var card=document.createElement("div");
	card.classList.add("card","mt-3")
	//card body
	var cardBody=document.createElement("div");
	cardBody.classList.add("card-body")
	//image
	var imageElement=document.createElement("img")
	imageElement.src=value.image;
	imageElement.classList.add("img-responsive")
	imageElement.alt=value.name;

	//name
	var name=document.createElement("h2")
	name.textContent=value.name;
	name.classList.add("text-center")
	//price
	var price=document.createElement("p");
	price.classList.add("text-warning","text-center")
	price.innerHTML="<s>₹"+value.price+"/-";
	//original price
	var oPrice=document.createElement("p");
	oPrice.textContent=value.oPrice;
	oPrice.classList.add("text-center","text-info")

    //button
    var buttonParent=document.createElement("div");
    buttonParent.classList.add("d-grid","gap-2");
    

    var button=document.createElement("button");
	button.classList.add("btm","btn-primary");
	button.textContent="Add to cart"
	buttonParent.append(button)
	
	
	
	cardBody.append(imageElement)
	cardBody.append(name)
	cardBody.append(price)

    cardBody.append(oPrice)
    cardBody.append(buttonParent)

	card.append(cardBody);
	column.append(card);






})

}
