const mongoose = require("mongoose");
const phone = mongoose.model("phone");

const handError = (err, res) => {
  res.statusCode = 400;
  return err;
}

const getPhones = async (req, res) => res.json(await phone.find().catch(err => handError(err,res)));
const createPhone = async (req, res) =>res.json(await phone.create(req.body).catch(err => handError(err,res)));
const getSinglePhone = async (req, res) => res.json(await phone.findOne({ _id: req.params.phoneId }).catch(err => handError(err,res)));
const deletePhone = async (req, res) =>res.json(await phone.findOneAndDelete({_id: req.params.phoneId}).catch(err => handError(err,res)));
const updatePhone = async (req, res) => res.json(await phone.findOneAndUpdate({_id: req.params.phoneId}, req.body).catch(err => handError(err,res)));

module.exports = {
  getPhones,
  createPhone,
  getSinglePhone,
  updatePhone,
  deletePhone
};
