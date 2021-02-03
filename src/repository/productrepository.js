const dbConnection = require('../connections/dbconnection')
const queries = require('../queries/dbqueries')

module.exports = class ProductRepository{
    async saveProduct(product){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION')
            let savedProduct = await con.query(queries.INSERT_PRODUCT,
                [product.productId, product.productName, product.price, product.description])
                await con.query('COMMIT')
                product.productId = savedProduct.productId
                return product;

        }
        catch(ex){
            await con.query("ROLLBACK")
            throw ex
        }
        finally{
            await con.release()
            await con.destroy()
        }

    }

    async updateProduct(product){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION')
            await con.query(queries.UPDATE_PRODUCT,
                [product.price,product.productId])
                await con.query('COMMIT')
                //product.productId = savedProduct.productId
                return true;

        }
        catch(ex){
            await con.query("ROLLBACK")
            throw ex
        }
        finally{
            await con.release()
            await con.destroy()
        }

    }

    async deleteProduct(product){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION')
            await con.query(queries.DELETE_PRODUCT,
                [product.productId])
                await con.query('COMMIT')
                //product.productId = savedProduct.productId
                return true;

        }
        catch(ex){
            await con.query("ROLLBACK")
            throw ex
        }
        finally{
            await con.release()
            await con.destroy()
        }

    }

    async findAllProduct(){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION')
           const products =  await con.query(queries.FETCH_PRODUCT)
                await con.query('COMMIT')
                //product.productId = savedProduct.productId
                return JSON.parse(JSON.stringify(products));

        }
        catch(ex){
            await con.query("ROLLBACK")
            throw ex
        }
        finally{
            await con.release()
            await con.destroy()
        }

    }

    async findAllProductByName(product){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION')
           const products =  await con.query(queries.SEARCH_NAME,[product.productName])
                await con.query('COMMIT')
                //product.productId = savedProduct.productId
                return JSON.parse(JSON.stringify(products));

        }
        catch(ex){
            await con.query("ROLLBACK")
            throw ex
        }
        finally{
            await con.release()
            await con.destroy()
        }

    }

}