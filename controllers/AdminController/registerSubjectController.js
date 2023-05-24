import RegisterSubjectSchema from "../../models/registerSubject.Model.js";


export const register = async (req, res) => {
    const {student_id, subject_id} = req.body;
    try {
        await RegisterSubjectSchema.create({
            student_id: student_id,
            subject_id: subject_id
        });
        return res.json({
            msg: "Row Is Added"
        }, 200)
    } catch (err) {
        return res.json({
            error: error.message
        }, 500)
    }
};

