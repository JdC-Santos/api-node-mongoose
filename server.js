const app = require('./custom-express')();

app.listen(3000, () => {
    console.log("Ouvindo a porta 3000");
});