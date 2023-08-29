let item;
let amount;

entry = prompt("Please enter what item you want", "item goes here");
item = entry;
entry = prompt(`How many ${item}s do you want?`);
amount = entry;
let order = { item: item, amount: amount };
alert(`You have place an order for ${order.amount} ${order.item}s`);
