module.exports = {
    userIdBody: {
        'userId': '03236426-3524-4dd1-8b60-988d9e169e82'
    },
    updateCart: {
        'userId': '03236426-3524-4dd1-8b60-988d9e169e82',
        'cart': [
            {
                'title': 'Sample Product 1',
                'price': 9.99,
                'description': 'This is a sample product',
                'imageUrl': 'https://picsum.photos/id/0/5000/3333'
            },
            {
                'title': 'Sample Product 2',
                'price': 9.99,
                'description': 'This is a sample product',
                'imageUrl': 'https://picsum.photos/id/21/5000/3333'
            },
            {
                'title': 'Sample Product 3',
                'price': 9.99,
                'description': 'This is a sample product',
                'imageUrl': 'https://picsum.photos/id/24/5000/3333'
            }
        ]
    },
    placeOrder: {
        'orderId': '123456789',
        'userId': '987654321',
        'address': '123 Main St',
        'phoneNumber': '123-456-7890',
        'products': [
            {
                'id': '1',
                'title': 'Product 1',
                'price': 10.99,
                'description': 'Description for Product 1',
                'imageUrl': 'https://example.com/product1.jpg'
            },
            {
                'id': '2',
                'title': 'Product 2',
                'price': 19.99,
                'description': 'Description for Product 2',
                'imageUrl': 'https://example.com/product2.jpg'
            },
            {
                'id': '3',
                'title': 'Product 3',
                'price': 7.99,
                'description': 'Description for Product 3',
                'imageUrl': 'https://example.com/product3.jpg'
            }
        ]
    }
};
