const express = require('express');
const router = express.Router();
const {
    registerUser,
    authUser,
    deleteintegration,
} = require('../Controllers/userControllers');

router.post('/accountholder', registerUser);
router.post('/authorise', authUser);
router.delete('/deleteintegration', deleteintegration);
module.exports = router;