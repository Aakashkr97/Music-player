function getProductById(id) {
    return products.find(function(product) {
        return product.id === id;
    });
};