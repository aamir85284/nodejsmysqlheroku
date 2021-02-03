// const dbConnection = require('./connections/dbconnection')

// console.log(dbConnection().then(con=>console.log(con)))

const ProductRepository = require('./repository/productrepository')

const productRepository = new ProductRepository()

const main = async () => {
    // let savedProduct = await productRepository.saveProduct({
    //     productId:3,
    //     productName:'Iphone11',
    //     price:766666,
    //     description:"You can have this its good"
    // })
    // console.log("SAVE product ----->", savedProduct);

    // let updatedProduct = await productRepository.updateProduct({
    //     productId:3,
    //     productName:'Iphone11',
    //     price:866666,
    //     description:"You can have this its good"
    // })
    // console.log("UPDATE product ----->", updatedProduct);

    // let deletedProduct = await productRepository.deleteProduct({
    //     productId:3,
    //     // productName:'Iphone11',
    //     // price:866666,
    //     // description:"You can have this its good"
    // })
    // console.log("DELETE product ----->", deletedProduct);


    // const products = await productRepository.findAllProduct();
    // console.log('PRODUCT LIST ---->',products)

    const products = await productRepository.findAllProductByName({
        productName:'Iphone12'
    });
    console.log('PRODUCT LIST ---->',products)

}
main()
