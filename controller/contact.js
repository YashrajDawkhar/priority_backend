
require('../database/connection_db')
const db = require('../models/contact');




exports.save = async function (req, res) {

    const data = new db(req.body);
    const save = await data.save();
    res.status(201).json({ message: "Contact details have been recieved sucessfully" })


}