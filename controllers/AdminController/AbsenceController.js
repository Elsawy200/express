import AbsenceSheets from "../../models/absenceSheetsModel.js";


export const generate = async (req, res) => {
    const {name, student} = req.body;
    try {

    } catch (err) {
        res.json({
            err: err.message
        }, 500)
    }
};