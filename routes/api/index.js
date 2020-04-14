const router = require('express').Router();
const activityRoutes = require('./activities');

// Activity routes
router.use('/activities', activityRoutes);

module.exports = router;
