const {where} = require('sequelize');
const Product = require('../models/Products');
const ProductService = require('../services/productService')
const ProductDTO = require('../dto/productsDTO');
module.exports = class ProductController {

    static async getAllProducts(req, res){
        const products = await ProductService.getAll();
        if(products.length === 0){
            res.json({message: 'Nenhum produto encontrado!'});
            return;
        }
        res.json(products.map(p => new ProductDTO(p)));
    }

    static async addProduct (req, res){
        const title = req.body.title;
        const price = req.body.price;
        const category = req.body.category;

        const Product = {
            title: title,
            price: price,
            category: category
        }
        if(!title || !price){
            res.json({message: 'Título e preço são obrigatórios!'});
            return;
        }

        try {
            await ProductService.create(Product);
        }catch (error) {
            res.json({message: 'Erro ao criar o produto!', error: error.message});
            return;
        }
        
        res.json({message: `Nome ${title} com o preço de ${price} na categoria ${category} foi criada com sucesso!`});
    }

    static async getProductById(req, res){
        const id = req.params.id;
        if(!id){
            res.json({message: 'ID do produto é obrigatório!'});
            return;
        }
        const product = await ProductService.getById(id);
        if(!product){
            res.json({message: `Produto com id ${id} não encontrado!`});
            return;
        }
        res.json(new ProductDTO(product));
    }

    static async updateProductById(req, res){
        const id = req.params.id;
        const title = req.body.title;
        const price = req.body.price;
        const category = req.body.category;

        const Products = {
            title: title,   
            price: price,
            category: category
        }
        if(!id){
            res.json({message: 'ID do produto é obrigatório para atualizar!'});
            return;
        }
        await ProductService.update(id, Products);
        if(!id){
            res.json({message: `Produto com id ${id} não encontrado!`});
            return;
        }
        res.json({message: `Produto com id ${id} foi atualizado com sucesso! Novo nome: ${title}, Novo preço: ${price}, Nova categoria: ${category}`});
    }

        static async deleteProductById(req, res){
        const id = req.params.id;
        if(!id){
            res.json({message: 'ID do produto é obrigatório para deletar!'});
            return;
        }
        await ProductService.delete(id);
        if(!id){
            res.json({message: `Produto com id ${id} não encontrado!`});
            return;
        }
        res.json({message: `Produto com id ${id} foi deletado com sucesso!`});
    }

}