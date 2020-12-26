const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/curso-mongoose',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log("Conectado ao mongoDB");
}).catch( (err) => {
    console.log("Erro ao conectar ao mongodb");
    console.log(err);
});

module.exports = mongoose;