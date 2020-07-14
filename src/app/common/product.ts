export class Product {
    itemId : string;
    itemName : string;
    itemDescription : string;
    // itemCategory : string;
    itemPrice : string;
    // itemPic : string;
    constructor(itemId : string, itemName : string, itemDescription : string, itemPrice : string) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
    }
}
