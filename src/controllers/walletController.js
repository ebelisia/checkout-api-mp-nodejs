exports.walletbutton = (req, res, next) => {
  // SDK de Mercado Pago
  const mercadopago = require("mercadopago");

  // Configura credenciais
  mercadopago.configure({
    //insert your access_token
    access_token: process.env.ACCESS_TOKEN
  });

  // Cria um objeto de preferência
  let preference = {
    items: [
      {
        title: "Smartphone",
        unit_price: 200,
        quantity: 1
      }
    ]
  };

  mercadopago.preferences
    .create(preference)
    .then(function(response) {
      global.init_point = response.body.init_point;
      var preference_id = response.body.id;
      res.render("checkout", { preference_id });
    })
    .catch(function(error) {
      res.render("error");
      console.log(error);
    });
};
