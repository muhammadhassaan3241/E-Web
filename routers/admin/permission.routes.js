const router = require('express').Router();
const { createPermission, updatePermission, deletePermission, viewPermissions } = require('../../controllers/admin/permission.controller')

router.post('/create-permission', createPermission)
router.post('/update-permission', updatePermission)
router.post('/delete-permission', deletePermission)

module.exports = router;