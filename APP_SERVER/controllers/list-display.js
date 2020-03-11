const data = [
    {brand: "Apple", model: "iPhone X", color: "Red", cost: 1000},
    {brand: "Apple", model: "iPhone XS Max", color: "White", cost: 1400},
    {brand: "Apple", model: "iPhone 11 Pro", color: "Midnight Green", cost: 1300}
];

let main = (req, res) => res.render('list-display', {
    'data': data,
    'title': 'List of Phones'
});

module.exports = {
    main
};