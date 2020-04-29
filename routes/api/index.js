const router = require('express').Router();
const activityRoutes = require('./activities');
const userRoutes = require('./users');

router.use('/activities', activityRoutes);
router.use('/users', userRoutes);


module.exports = router;
