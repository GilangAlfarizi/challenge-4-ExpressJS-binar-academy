const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const accountController = require('./controllers/accountController')
const transactionController = require('./controllers/transactionController')

router.get('/', (req, res) => {
    return res.json({
        message: "Hello World"
    })
})

router.post("/users", userController.registerUser)
router.get("/users", userController.getUser)
router.get("/users/:id", userController.getUserId)
router.post("/accounts", accountController.createAccount)
router.get("/accounts", accountController.getAccount)
router.get("/accounts/:id", accountController.getAccountId)
router.post("/transactions", transactionController.createTransaction)
router.get("/transactions", transactionController.getTransaction)
router.get("/transactions/:id", transactionController.getTransactionId)


module.exports = router