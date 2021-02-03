const ProductRepository = require('../repository/productrepository')
const repository = new ProductRepository()
const ProductApi = (app) =>{
    app.get('/products', (req, res)=>{
        repository.findAllProduct().then(products=>res.json(products))
    })

    app.post('/products', (req, res)=>{
        const {productId, productName, price, description} = req.body
        repository.saveProduct({productId, productName, price, description})
        .then(product => res.json(product))
    })


    app.put('/products/:productId', (req, res)=>{
        const {price} = req.body
        repository.updateProduct({productId:req.params['productId'], price:price})
        .then(product => res.json(product))
    })

    app.delete('/products/:productId', (req, res)=>{
        //const {price} = req.body
        repository.deleteProduct(req.params['productId'])
        .then(data => res.json({'message':data}))
    })
}


module.exports = ProductApi;