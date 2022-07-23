const Router = require('express').Router();
const validator = require('../config/validator');

const userController = require('../controller/userController');
const productController = require('../controller/productController');
// const passport =require('../config/passport');


const { signUpUsers, signInUsers, verifyMail, verificarToken, traerUsuarios } = userController;
const { createProduct, getAllproducts, getOneproduct, deleteProduct, modifyProduct } = productController;

Router.route("/alluser")
    .get(traerUsuarios)

//Users
Router.route('/auth/register')
    .post(signUpUsers)

Router.route('/auth/login')
    .post(signInUsers)

Router.route('/verify/:string')
    .get(verifyMail)

// Router.route('/auth/signInToken')
//     .get(passport.authenticate('jwt',{session:false}),verificarToken)

// // products

Router.route('/product/new')
    .post(createProduct)

Router.route('/products')
    .get(getAllproducts)

Router.route('/product/:id')
    .get(getOneproduct)
    .delete(deleteProduct)
    .put(modifyProduct)



//comments

module.exports = Router    