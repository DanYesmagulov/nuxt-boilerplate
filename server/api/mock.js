/**
 * Mock API for frontend server on express
 * @module 'API/Mock'
 */
const {Router} = require('express');
const Action = require('../services/Action/index');

const router = Router();

router.get('/', async (req, res) => {
  Action(() => {
    return res.status(200).json({success: true, message: 'hello from mock'});
  }, (e) => {
    console.log("🐞: e", e)
    return res.status(500).json({success: false, error: e})
  })
})

module.exports = router;
