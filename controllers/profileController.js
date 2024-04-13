import asyncHandler from "express-async-handler";
import Speaking from "../models/speakingModel.js";
import { Writing } from "../models/writingModel.js";

const fetchResults = asyncHandler(async (req, res) => {
    try {
        console.log(req.user.uid);
        const uid = req.user.uid;
        const speaking_data = await Speaking.find({user_id: uid});
        const speaking_overallBands = speaking_data.map(obj => obj.result.ieltsInfo.overallBand);
        const speaking_time = speaking_data.map(obj => obj.createdAt);
        const speaking_ids = speaking_data.map(obj => obj._id);
        const writing_data = await Writing.find({user_id: uid});
        const writing_overallBands = writing_data.map(obj => obj.result.ieltsinfo.overallBand);
        const writing_time = writing_data.map(obj => obj.createdAt);
        const writing_ids = writing_data.map(obj => obj._id);
        const data = {
            "speaking": {
                overallBand: speaking_overallBands,
                time: speaking_time,
                id: speaking_ids,
            },
            "listening": {
                overallBand: [],
                time: [],
                id: []
            },
            "reading": {
                overallBand: [],
                time: [],
                id: []
            },
            "writing": {
                overallBand: writing_overallBands,
                time: writing_time,
                id: writing_ids
            },
        }
        res.json(data);
    } catch (e) {
      res.status(404);
      var errorMessage = e.message;
      throw new Error(errorMessage);
    }
  });

export{fetchResults};