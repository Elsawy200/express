import StudentSchema from "../../models/studentsModel.js";


export const create_student = async (req, res) => {
    const {username, password, academic_number} = req.body;
    try {
        if (!username) {
            return res.json({
                msg: "UserName Is Required"
            }, 400);
        }
        if (!password) {
            return res.json({
                msg: "Password Is Required"
            }, 400);
        }
        if (password.length < 7) {
            return res.json({
                msg: "Password Must Be At Least 7 Digits"
            }, 400);
        }
        if (!academic_number) {
            return res.json({
                msg: "AcademicNumber Is Required"
            }, 400);
        }
        const checkAcademic = await StudentSchema.findOne({academic_number});
        if (checkAcademic) {
            return res.json({
                msg: "Student Is Exist"
            }, 400);
        }
        await StudentSchema.create({
            username: username,
            password: password,
            academic_number: academic_number
        });
        return res.json({
            msg: "Student Is Added"
        }, 200);
    } catch (err) {
        return res.json({
            error: err.message
        }, 500);
    }
}

export const update_student = async (req, res) => {
    const {id, username, academic_number, password} = req.body;
    try {
        if (!id) {
            return res.json({
                msg: "Id Is Required"
            }, 400);
        }
        if (password) {
            if (password.length < 7) {
                return res.json({
                    msg: "Password Must Be At Least 7 Digits"
                }, 400);
            }
        }
        const find = await StudentSchema.findByIdAndUpdate(id, {
            username: username,
            academic_number: academic_number,
            password: password,
        }, {runValidators: true});
        if (!find) {
            return res.json({
                msg: "Student Not Found"
            }, 400);
        } else {
            return res.json({
                msg: "Student Is Updated"
            }, 200);
        }
    } catch (error) {
        res.json({
            error: error.message
        }, 500)
    }
}

export const get_student = async (req, res) => {
    try {
        const data = await StudentSchema.find();
        if (data.length == 0) {
            res.json({
                msg: "No Data"
            }, 400)
        } else {
            res.json({
                data: data
            }, 200);
        }
    } catch (error) {
        res.json({
            error: error.message
        }, 500)
    }
}

export const get_by_id = async (req, res) => {
    const { id } = req.params;
    try {
        const find = await StudentSchema.findById(id);
        if (!find) {
            return res.json({
                msg: "Student Not Found"
            }, 400);
        } else {
            return res.json({
                data: find
            }, 200);
        }
    } catch (error) {
        return res.json({
            error: error.message
        }, 500);
    }
}

export const delete_student= async (req, res) => {
    const { id } = req.body;
    try {
        if (!id) {
            return res.json({
                msg: "Id Is Required"
            }, 400);
        }
        const find = await StudentSchema.findByIdAndDelete(id);
        if (!find) {
            return res.json({
                msg: "Student Not Found"
            }, 400);
        } else {
            return res.json({
                msg: "Student Is Deleted"
            }, 200);
        }
    } catch (error) {
        return res.json({
            error: error.message
        }, 500);
    }
}

