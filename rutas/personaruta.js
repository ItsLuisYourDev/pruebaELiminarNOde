const { Router } = require('express')
const router = Router()
const persona = require('../Controllers/personactrl')

//router.get('/',persona.consultar_todo);
router.get('/', (req, res) => {
    res.send('App is running bsc..');
});

router.get('/:id', persona.consultar1);
router.post('/', persona.guardar_nuevo);
router.put('/', persona.actualiza_datos);
router.delete('/:id', persona.elimina1);

module.exports = router;
