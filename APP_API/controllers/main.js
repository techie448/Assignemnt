const getPhones = (req, res) => res.status(200).json({"status": "success"});
const createPhone = (req, res) => res.status(200).json({"status": "success"});
const getSinglePhone = (req, res) => res.status(200).json({"status": "success"});
const updatePhone = (req, res) => res.status(200).json({"status": "success"});
const deletePhone = (req, res) => res.status(200).json({"status": "success"});

module.exports = {
    getPhones,
    createPhone,
    getSinglePhone,
    updatePhone,
    deletePhone
};