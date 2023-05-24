import DoctorSchema from '../../models/doctorModel.js';


export const create = async (req, res) => {
    try {
        const { name, email, password,role} = req.body;
        if (!name) {
            return res.json({
                msg: "Name Is Required"
            }, 400)
        }
        if (name.length < 3) {
            return res.json({
                msg: "Name Must Be At Least 3 Digits"
            }, 400);
        }
        if (!email) {
            return res.json({
                msg: "Email Is Required"
            }, 400)
        }
        if (!password) {
            return res.json({
                msg: "Password Is Required"
            }, 400)
        }
        if (password.length < 7) {
            return res.json({
                msg: "Password Must Be At Least 7 Digits"
            }, 400);
        }
        if (!role){
            return res.json({
                msg: "Role Is Required"
            }, 400);
        }
        const checkEmail = await DoctorSchema.findOne({ email });
        if (checkEmail) {
            return res.json({
                msg: "Email Is Exist"
            }, 400);
        }
        await DoctorSchema.create({
            name: name,
            email: email,
            password: password,
            role:role
        });
        return res.json({
            msg: "Doctor Is Added"
        }, 200)
    } catch (error) {
        return res.json({
            error: error.message
        }, 500)
    }
}

export const update = async (req, res) => {
    const { id, name, email, password,role } = req.body;
    try {
        if (!id) {
            return res.json({
                msg: "Id Is Required"
            }, 400);
        }
        if (name) {
            if (name.length < 3) {
                return res.json({
                    msg: "Name Must Be At Least 3 Digits"
                }, 400);
            }
        }
        if (password) {
            if (password.length < 7) {
                return res.json({
                    msg: "Password Must Be At Least 7 Digits"
                }, 400);
            }
        }

        const find = await DoctorSchema.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password,
            role:role
        }, { runValidators: true });
        if (!find) {
            return res.json({
                msg: "Admin Not Found"
            }, 400);
        } else {
            return res.json({
                msg: "Admin Is Updated"
            }, 200);
        }
    } catch (error) {
        res.json({
            error: error.message
        }, 500)
    }
}

export const get = async (req, res) => {
    try {
        const data = await DoctorSchema.find();
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
        const find = await DoctorSchema.findById(id);
        if (!find) {
            return res.json({
                msg: "Doctor Not Found"
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

export const del = async (req, res) => {
    const { id } = req.body;
    try {
        if (!id) {
            return res.json({
                msg: "Id Is Required"
            }, 400);
        }
        const find = await DoctorSchema.findByIdAndDelete(id);
        if (!find) {
            return res.json({
                msg: "Doctor Not Found"
            }, 400);
        } else {
            return res.json({
                msg: "Doctor Is Deleted"
            }, 200);
        }
    } catch (error) {
        return res.json({
            error: error.message
        }, 500);
    }
}