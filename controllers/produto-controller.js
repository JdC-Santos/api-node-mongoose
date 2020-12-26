module.exports = (app) => {
    app.route('/api/produtos')
        .get((req, res) => {
            
            var produto = app.models.produto;

            produto.find(function (err, docs) {
                if(err){
                    console.log(err);
                    res.send('erro');
                }else{
                    res.send( docs );
                }
            });

        })
        .post((req, res) => {

            const {nome, preco, descricao } = req.body;

            var produto = new app.models.produto();

            produto.nome = nome;
            produto.preco = preco;
            produto.descricao = descricao;

            produto.save((error, result) => {
                if(error){
                    console.log(error);
                    res.status(400).send('erro');
                }else{
                    console.log('produto cadastrado com sucesso');
                    console.log(result);
                    res.status(201).send('sucesso');
                }
            });

        });

    app.route('/api/produtos/produto/:id')
        .get((req, res) => {
            app.models.produto.findById(req.params.id,function (err, docs) {
                if(err){
                    console.log(err);
                    res.status(400).send('ID não encontrado');
                }else{
                    res.send( docs );
                }
            });
        })
        .put((req, res) => {
            var produto_id = req.params.id;

            app.models.produto.findById(produto_id, (error, produto) => {
                
                if( error ) {
                    console.log('Erro ao buscar o produto' + JSON.stringify(error) );
                    res.status(500).json({msg: 'Não foi possivel encontrar o produto!'});
                } else {
                    produto.nome = req.body.nome ? req.body.nome : produto.nome;
                    produto.preco = req.body.preco ? req.body.preco : produto.preco;
                    produto.descricao = req.body.descricao ? req.body.descricao : produto.descricao;

                    produto.save((error, result) => {
                        if( error ) {
                            console.log('Erro ao atualizar o produto' + JSON.stringify(error) );
                            res.status(500).json({msg: 'Não foi possivel atualizar o produto!'});
                        } else {
                            res.json({msg: "Produto atualizado com sucesso!"});
                        }
                    });
                }

            });
        })
        .delete((req, res) => {
            app.models.produto.remove({"_id": req.params.id }, (error, result) => {
                
                if ( error ) {
                    console.log('Erro ao remover o produto' + JSON.stringify(error) );
                    res.status(500).json({msg: 'Não foi possivel remover o produto!'});
                } else {
                    console.log("Produto removido com sucesso!");
                    res.json({msg: 'Produto removido com sucesso!'});
                }
            })
        });
}