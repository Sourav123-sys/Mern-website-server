const express = require("express");
const router = express.Router();

const { requireSignin, isAuth,isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create,listOrders,getStatusValues,updateOrderStatus,orderById } = require("../controllers/order");
const { deCreaseQuantity } = require("../controllers/product");


router.post ('/order/create/:userId',
requireSignin,
addOrderToUserHistory,
deCreaseQuantity,
create)


router.get('/orders/list/:userId',requireSignin,listOrders);

router.get(
    "/order/status-values/:userId",
    requireSignin,
   
    getStatusValues
);
router.put(
    "/order/:orderId/status/:userId",
    requireSignin,
   
    updateOrderStatus
);
router.param("userId", userById);
router.param("orderId", orderById);
module.exports = router;