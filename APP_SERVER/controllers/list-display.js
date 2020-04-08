const request = require("request");
const apiServer = "http://localhost:3000/api/";

const data = [
  { brand: "Apple", model: "iPhone X", color: "Red", cost: 1000, warranty: 1 },
  {
    brand: "Apple",
    model: "iPhone XS Max",
    color: "White",
    cost: 1400,
    warranty: 0.5
  },
  {
    brand: "Apple",
    model: "iPhone 11 Pro",
    color: "Midnight Green",
    cost: 1300,
    warranty: 0.1
  }
];

let main = (req, res) =>
  request.get(apiServer + "phones", (err, response, body) =>
    res.render("list-display", {
      data: JSON.parse(body),
      title: "List of Phones"
    })
  );

let detail = (req, res) => {
  console.log(req.params.phoneId);
  request.get(
    apiServer + `phones/${req.params.phoneId}`,
    (err, response, body) =>
      res.render("phone-detail", {
        phone: JSON.parse(body),
        title: "Details of Phone"
      })
  );
};

let newPhone = (req, res) => res.render("new", { title: "Add New Phone" });

let addNewPhone = (req, res) =>
  request(
    {
      url: apiServer + "phones",
      method: "POST",
      json: {
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        cost: req.body.cost,
        warranty: req.body.warranty,
        accessory: {
          box: req.body.box,
          charger: req.body.charger,
          earphone: req.body.earphone
        }
      }
    },
    (err, response, body) => res.redirect("/")
  );

module.exports = {
  main,
  detail,
  newPhone,
  addNewPhone
};
