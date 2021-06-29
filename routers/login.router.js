const router = require("express").Router();
const loginController = require("../controllers/login.controller");
const userController = require("../controllers/usersControllers");

router.post("/", async (req, res) => {
    try {

        const emailCheck = req.body.email;
        const passwordCheck = req.body.password;

        let token = await loginController.validate( emailCheck, passwordCheck );
        let user = await userController.userEmail( emailCheck );

        res.status(200).json( {token, user})
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;