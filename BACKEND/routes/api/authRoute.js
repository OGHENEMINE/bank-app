const router = require('express').Router()
const expressAsyncHandler = require('express-async-handler')
const { register, login } = require('../../controller/authController')


router.post('/register', expressAsyncHandler(async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    await register(firstname, lastname, email, password)
    return res.status(201).json('Registered!')
}));

router.post('/login', expressAsyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const credentials = await login(email, password);
    return res.json(credentials)
}))

module.exports = router