const express = require('express')
const router = express.Router()

const {
    getCategories,
    createCategory,
    getCategoryById
} = require('../controllers/category.js')

const {
    getProducts,
    getProductById,
    deleteProductById,
    createProduct,
    getProductsByCategoryId,
    addProductToFavorite,
    getFavoriteProducts
} = require('../controllers/product.js')

const authMiddleware = require('../../api-auth/middleware/authMiddleware')


// энд пойнты для категорий------------------------------

//получить все категории
router.get('/categories', getCategories)

//Создать категорию
router.post('/category', createCategory);

//получить категорию по айди
router.get('/get-category/:id', getCategoryById)



// энд пойнты для товаров---------------------------------

//получить все товары
router.get('/products', getProducts)

//получить товар по айди
router.get('/products/:id', getProductById)

//создать товар
router.post('/create-product', createProduct)

//удалить товар по айди
router.delete('/products/:id', deleteProductById)

//Получить все товары в одной категории
router.get('/products-by-category/:id', getProductsByCategoryId)

//добавить товар в избранное 
router.post('/products/add-favorite',authMiddleware, addProductToFavorite)

exports.router = router