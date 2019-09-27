const express = require('express');
const apUser = express.Router();
const userController = require('../controllers/userController');
const jwtProteger = require('../middleware/jwtMiddleware');

/* 
apUser.get('/', function (req, res) {
    res.send('Hello World!');
});
 */
apUser.post('/login' ,userController.login);
apUser.get('/listar',userController.listar);


apUser.post('/crear' ,userController.crear);
apUser.put('/update' ,userController.update);
apUser.put('/updatepassword' ,userController.updatePassword);

apUser.delete('/borrar' ,userController.borrar);

//Esta linea  protege todas las rutas por debajo de este comando
apUser.use(jwtProteger.protegerRutas);

module.exports = apUser;

