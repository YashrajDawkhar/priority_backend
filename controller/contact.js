
require('../database/connection_db')
const db = require('../models/contact');




exports.save = async function (req, res) {
    const data = new db(req.body);
    const save = await data.save();
    res.status(201).json({ message: "Contact details have been recieved sucessfully" })
}

exports.getContactDetails = async (req, res) => {

    try {
        
        let data = await db.find();
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}