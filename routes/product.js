const express = require('express');
const router =  express.Router();


const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listSearch,
    listRelated,
    listCategories,
    listBySearch,
photo
} = require("../controllers/product")


const {userById} = require("../controllers/user")
const {requireSignin,isAuth,isAdmin} = require("../controllers/auth")
router.get('/product/:productId',read)
router.post('/product/create/:userId',requireSignin,create);

router.delete('/product/:productId:userId',requireSignin,remove)
//requireSignin,isAuth,isAdmin o use kora jabe

router.post("/products/by/search", listBySearch);

router.get("/products/search", listSearch);
router.put('/product/:productId:userId',requireSignin,update)
//requireSignin,isAuth,isAdmin o use kora jabe

router.get('/products',list)

router.get('/products/related/:productId',listRelated)

router.get('/products/categories',listCategories)

router.get('/product/photo/:productId',photo);







router.param("userId",userById)
router.param("productId",productById)
module.exports = router;