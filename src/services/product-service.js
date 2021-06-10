const _apiBase = "https://my-json-server.typicode.com/ard43g/storage/";
const ProductService = {
    async getResource() {
        const response = await fetch(`${_apiBase}product/`);
        return response;
    },

    sendNewOrder(order) {
        const response = fetch(`${_apiBase}orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(order),
        });
        return response;
    },
};

export default ProductService;
