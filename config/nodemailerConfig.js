const nodemailer = require("nodemailer");

const user = "movieretro6@gmail.com";
const pass = "333movie333";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});


module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "Movie Retro, por favor confirma tu cuenta de correo.",
    html: `<h1>Activación de Cuenta</h1>
        <h2>Hola ${name},</h2>
        <p>Gracias por registrarte en Movie Retro,
        por favor confirma tu email haciendo click en el siguiente enlace.</p>
        <a href=https://back-movie.herokuapp.com/users/confirm/${confirmationCode}> Activar cuenta.</a>
        </div>`,
  }).catch(err => console.log(err));
};

module.exports.sendConfirmationEmailNewClass = (name, email, roomName, roomDateStart) => {
  console.log("Nombre del usuario: ", name);
  console.log("Nombre del email", email);
  console.log("Nombre del roomName: ", roomName);
  console.log("Nombre del usuario: ", roomDateStart);

  transport.sendMail({
    from: user,
    to: email,
    subject: "Movie Retro estas son tus peliculas alquiladas.",
    html: `<h1>Confirmacion clase reservada</h1>
        <h2>Hola ${name}</h2>
        <p>Te confirmamos la reserva de la clase de ${roomName} para el ${roomDateStart},
        te esperamos!.</p>

        </div>`,
  }).catch(err => console.log(err));
};