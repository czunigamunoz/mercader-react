class Order{
    products = [];
    quantity = {};
    productsFormat = {};

    getProducts() {
        return this.products;
    }

    getAllQuantity() {
        return this.quantity;
    }

    getQuantity(idProduct) {
        return this.quantity[idProduct];
    }

    setQuantity(idProduct, quantity) {
        this.quantity[idProduct] = quantity;
    }

    getProductsFormatted(){
        return this.productsFormat;
    }

    addProduct(product){
        this.products.push(product);
        this.productsFormat[product.id] = product;
        this.quantity[product.id] = null;
    }

    deleteProduct(productId){
        this.products = this.products.filter(p => p.id !== productId);
        delete this.productsFormat[productId];
        delete this.quantity[productId];
    }

    deleteAll(){
        this.products = [];
        this.quantity = {};
        this.productsFormat = {};
    }
}

const productOrder = new Order();
export default productOrder;