class Product {
  private static productCount: number = 0;

  readonly id: number;

  private name_: string;
  private price_: number;

  constructor(name: string, price: number) {
    Product.productCount++;
    this.id = Product.productCount;

    this.name_ = name;
    this.price_ = price;
  }

  get name(): string {
    return this.name_;
  }

  set name(value: string) {
    if (value.length < 1) {
      throw new Error("Name must contain at least 1 character");
    }

    this.name_ = value;
  }

  get price(): number {
    return this.price_;
  }

  set price(value: number) {
    if (value <= 0) {
      throw new Error("Price must be positive");
    }

    this.price_ = value;
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name_}, Price: $${this.price_}`;
  }

  static getProductCount(): number {
    return Product.productCount;
  }
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  listProducts(): string {
    
    const result = this.products
      .map(product => product.getDetails())
      .join("\n");

    return `${result}\nTotal products created: ${Product.getProductCount()}`;
  }
}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
