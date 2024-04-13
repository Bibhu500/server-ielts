import  {Writing} from "../models/writingModel.js";
import asyncHandler from "express-async-handler";

const saveResults = asyncHandler(async (req, res) => {
    const { data } = req.body;
    try {
        console.log("Hello world")
        console.log(data);
        const { question, answer, result, imageUrl, type, wordCount } = data;
        const writing = await Writing.create({
            user_id: req.user.uid,
            question,
            answer,
            imageUrl,
            type,
            wordCount,
            result,
        });
        console.log(writing);
        res.status(201).json({
            message: "saved",
            data: writing
          });
    } catch (e) {
      res.status(404);
      var errorMessage = e.message;
      throw new Error(errorMessage);
    }
  });

  const getSavedResults = asyncHandler(async (req, res) => {
    const { data } = req.body;
    const id = data.id;
    console.log(id)
    try {
        const writing = await Writing.findOne({
          _id: id,
          user_id: req.user.uid
        });
        res.status(201).json(writing);
    } catch (e) {
      res.status(404);
      var errorMessage = e.message;
      throw new Error(errorMessage);
    }    
  });
  


export{saveResults, getSavedResults};