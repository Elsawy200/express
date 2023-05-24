import subjectsModel from "../../models/subjectsModel.js";


export const create = async (req, res) => {
    const { name, code, section, required_sub } = req.body;
    try {
        if (!name) {
            return res.json({
                msg: "Name Is Required"
            }, 400);
        }
        if (!code) {
            return res.json({
                msg: "Code Is Required"
            }, 400);
        }
        if (!section) {
            return res.json({
                msg: "Section Is Required"
            }, 400);
        }
        if (!required_sub) {
            return res.json({
                msg: "Required Sub Is Required"
            }, 400);
        }
        subjectsModel.create({
            name: name,
            code: code,
            section: section,
            required_sub: required_sub
        });
        return res.json({
            msg: "Subject Is Added"
        }, 200);
    } catch (error) {
        return res.json({
            error: error.message
        }, 500);
    }
}

export const update = async (req, res) => {
    const { id, name, code, section, required_sub } = req.body;
    try {
        if (!id) {
            return res.json({
                msg: "Id Is Required"
            }, 400);
        }
        const find = await subjectsModel.findByIdAndUpdate(id,
            {
                name: name,
                code: code,
                section: section,
                required_sub: required_sub
            });
        if (!find) {
            return res.json({
                msg: "Subject Not Found"
            }, 400);
        } else {
            return res.json({
                msg: "Subject Is Updated"
            }, 400);
        }
    } catch (error) {
        return res.json({
            error: error.message
        }, 500);
    }
}

export const get = async (req, res) => {
    try {
        const data = await subjectsModel.find();
        if (data.length == 0) {
            return res.json({
                msg: "No Data"
            }, 400)
        } else {
            return res.json({
                data: data
            }, 400)
        }
    } catch (error) {
        return res.json({
            error: error.message
        }, 500)
    }
}

export const del = async (req, res) => {
    const { id } = req.body;
    try {
        const find = await subjectsModel.findByIdAndDelete(id);
        if (!find) {
            return res.json({
                msg: "Subject Not Found"
            }, 400)
        } else {
            return res.json({
                msg: "Subject Is Deleted"
            }, 200)
        }
    } catch (error) {
        return res.json({
            error: error.message
        }, 500);
    }
}

export const get_by_id = async (req, res) => {
    const { id } = req.params;
    try {
        const find = await subjectsModel.findById(id);
        if (!find) {
            return res.json({
                msg: "Subject Not Found"
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