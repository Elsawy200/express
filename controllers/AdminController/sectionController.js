import sectionsModel from '../../models/sectionsModel.js';

export const create = async (req, res) => {
   const { name, code } = req.body;
   try {
      if (!name) {
         return res.json({
            msg: "Name Is Required"
         }, 400);
      }
      if (!code) {
         return  res.json({
            msg: "Code Is Required"
         }, 400);
      }
      await sectionsModel.create({
         name: name,
         code: code
      });
      return res.json({
         msg: "Sections Is Added"
      }).status(200)
   } catch (error) {
      return  res.json({
         error: error.message
      }, 500)
   }
}

export const update = async (req, res) => {
   const { id, name, code } = req.body;
   try {
      if (!id) {
         return res.json({
            msg: "Id Is Required"
         }, 400)
      }
      const find = await sectionsModel.findByIdAndUpdate(id,
         {
            name: name,
            code: code
         }
      );
      if (!find) {
         return res.json({
            msg: "Section Not Found"
         }, 400);
      } else {
         return res.json({
            msg: "Section Is Updated"
         }, 200);
      }
   } catch (error) {
      return res.json({
         error: error.message
      }, 500)
   }
}

export const get = async (req, res) => {
   try {
      const data = await sectionsModel.find();
      if (data.length == 0) {
         return res.json({
            msg: "No Data"
         }, 400)
      }
      else {
        return res.json({
            data: data
         }, 200);
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
      const find = await sectionsModel.findByIdAndDelete(id);
      if (!find) {
         return res.json({
            msg: "Section Not Found"
         }, 400)
      } else {
         return res.json({
            msg: "Section Is Deleted"
         }, 200)
      }
   } catch (error) {
      return res.json({
         error: error.message
      }, 500)
   }
}

export const get_by_id = async (req, res) => {
   const { id } = req.params;
   try {
      const find = await sectionsModel.findById(id);
      if (!find) {
         return res.json({
            msg: "Section Not Found"
         }, 400)
      } else {
         return res.json({
            data: find
         }, 200)
      }
   } catch (error) {
      return res.json({
         error: error.message
      }, 500)
   }
}



