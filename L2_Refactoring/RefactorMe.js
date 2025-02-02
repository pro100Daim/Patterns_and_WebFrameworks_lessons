// Код до рефакторінгу

class Order {
    constructor(items, customer) {
        this.items = items;
        this.customer = customer;
    }
    
    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.type === "food") {
                total += item.price * 0.9; // знижка на їжу
            } else if (item.type === "electronics") {
                total += item.price * 1.2; // податок на електроніку
            } else {
                total += item.price;
            }
        }
        return total;
    }
    
    printReceipt() {
        console.log("Замовлення для: " + this.customer);
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].name + " - " + this.items[i].price + " грн");
        }
        console.log("Загальна сума: " + this.calculateTotal() + " грн");
    }
}

let items = [
    { name: "Хліб", price: 20, type: "food" },
    { name: "Телефон", price: 5000, type: "electronics" },
    { name: "Книга", price: 200, type: "other" }
];

let order = new Order(items, "Олексій");
order.printReceipt();

// Відрефакторений код з покращеною структурою та поясненнями