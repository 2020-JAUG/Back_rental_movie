const { User } = require("../models");
const bcrypt = require("bcrypt");
const nodemailer = require('../config/nodemailerConfig.js');

class Users {

    async nameUser(name){
        return User.findOne({
            where: {name}
        })
    }

    async userEmail(email){

        let resultado = await User.findOne({
            where: { email }
        })
        return resultado;
    }

    async findAllUsers() {
        return User.findAll();
    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);

        //Creamos una token que enviamos por mail para activar
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';

        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        }

        user = {
        name : user.name,
        lastName: user.lastName,
        lastName2: user.lastName2,
        password: user.password,
        dateOfBirth: user.dateOfBirth,
        city: user.city,
        address: user.address,
        cp: user.cp,
        email: user.email,
        phone: user.phone,
        token: token
    }

    let usuario = await User.create(user);

    //Llamamos a la funcion para enviar el correo al usuario.
    await nodemailer.sendConfirmationEmail(user.name, user.email, token);

    return usuario;
    }

    //Para activar la cuenta de usuario. Recibiendo el token y id
    async updateActive(token) {

            let user = await User.findOne({ where: { token } });
            console.log(user, 'usuario');
            let usuario = await User.update(
              //Datos que cambiamos
              {
                isActive: true,
              },
              {where: {id: user.id}}

            );
            let resultado = "La cuenta se ha activado correctamente. Ya puedes ingresar a la plataforma y alquilar tu próxima película.";
            
            return resultado;
    }

    async modifyUser(body) {

        return User.update(
            //DAtos que cambiamos
            {
                name: body.name,
                address: body.address,
                cp: body.cp,
                email: body.email,
                phone: body.phone
            },
            //Donde
            { where: {id: body.id}}
        )
    }


    async modifyPassword(body) {

        // let user = await User.findByPk(body.user);
        let user = await User.findByPk(body.userId);
        let oldPassword = body.oldPassword;

        let password = user.password;

        let verify = await bcrypt.compare(oldPassword, password);

        if(!verify){
         throw new Error('Wrong user or password');
        }

        let newPassword = await bcrypt.hash( body.newPassword, 10 );

        let updatepassword = await User.update(
            {password: newPassword},
            //Donde...
            {where: {id: body.userId}}
        )

        return User.findOne({
            where: {id : body.userId}
        });

        // return User.findByIdAndUpdate(
        //     {
        //         id: body.user,
        //         password: newPassword
        //     },

        //     { where: {id: body.id}}
        // )

    }

    async findUser (id) {
        return User.findOne(
            {where: {id: id}}
        );
    }

    async findByToken(token) {
        return User.findOne({ token: token });
    }

    async userId(id) {

        return User.findByPk(id);
    }

    async users_by_cp(body) {

        return User.findAll( {where: {cp: body.cp}} )
    }

    async deleteUser(data){

        return User.destroy( { where: { id: data.id } } );
    }
}

let usersController = new Users();
module.exports = usersController;