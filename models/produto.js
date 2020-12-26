module.exports = function(app){

    var Schema   = app.get('mongoose').Schema;

    // menu schema 
    var ProdutoSchema = new Schema({
        nome:      { type: String, required: true },
        preco:      { type: Number, required: true },
        descricao:   { type: String, required: false },
    });

    return app.get('mongoose').model('Produto', ProdutoSchema);
} 