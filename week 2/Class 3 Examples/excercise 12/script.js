let list = [
  { food: "Apple", price: 3 },
  { food: "Orange", price: 5 },
  { food: "Kiwi", price: 6 },
];
// alert(list[0].food);

let foodList = document.getElementById("foodlist");

for (i = 0; i < list.length; i++) {
  let item = document.createElement("li");
  item.innerText = list[i].food + " Price: " + list[i].price;
  foodList.appendChild(item);
}
