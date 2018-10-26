export enum TeaType {
    Popular,
    Tea,
    Milk_Tea,
    Special_Mix,
    Slushy,
    Milk_Foam,
    Fresh_Milk,
    Matcha
};

export class Product {
    name: string;
    description: string;
    image: Object;
    type: TeaType;
    price: number;
    selected: boolean;

    constructor(
        name: string,
        image: Object,
        type: TeaType,
        price: number
    ) {
        this.name = name;
        this.image = image;
        this.type = type;
        this.price = price;
        this.selected = false;
    };
}