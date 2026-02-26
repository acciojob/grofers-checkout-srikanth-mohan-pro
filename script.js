const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
getSumBtn.addEventListener("click", getSum);
function getSum(){
	let totalsum=0;
 const prices=document.querySelectorAll(".price");
	prices.forEach(price=>{
		totalsum= totalsum+Number(price.textContent);
	});
	const table=document.getElementsByTagName("table")[0];
	const newRow=document.createElement("tr");
	const newCell=document.createElement("td");

	newCell.textContent=totalsum;
	newRow.appendChild(newCell);
	table.appendChild(newRow);
};




