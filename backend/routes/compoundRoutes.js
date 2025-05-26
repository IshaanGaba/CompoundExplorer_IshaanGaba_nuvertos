const express = require('express');
const router  = express.Router();
const {
  getCompounds,
  getCompound,
  updateCompound
} = require('../controllers/compoundController');

router.get('/', getCompounds);
router.get('/:id', getCompound);
router.put('/:id', updateCompound);

module.exports = router;
