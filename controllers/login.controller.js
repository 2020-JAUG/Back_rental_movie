const userController = require("./usersControllers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "Somos un equipazo";


class LoginController {

    async validate( emailCheck, passwordCheck ) {

      let user = await userController.userEmail(emailCheck);

      if (user == null){
        throw new Error('Wrong user or password');
      }

      let password = user.password;

      let verificar = await bcrypt.compare(passwordCheck,password);

        if(!verificar){
          throw new Error('Wrong user or password');
        }
        if(!verificar) {
            throw new Error("Wrong user or password");
        }

        if (!user.isActive) {
          throw new Error("The account is not active. Please, check your email and activate your account.");
        }

        let payload = {
            userId: user.id,
            createdAt: new Date,
            isAdmin: user.isAdmin
        }

        return jwt.sign(payload, secret);
    }

}

let loginController = new LoginController();
module.exports = loginController;

        // if(user == null) {

        //     var errorText = err.response.data.message;

        //     if (errorText.includes("email")){
        //       setError(JSON.stringify("El email ya esta registrado."));

        //     } else if (errorText.includes("phone")){
        //       setError(JSON.stringify("El telefono ya esta registrado."));
        //     }else{
        //       setError(JSON.stringify(err.response.data.message));
        //     }
        //     return Error("Files not Found");
        //     // throw new Error("Wrong user or password");
        // }
