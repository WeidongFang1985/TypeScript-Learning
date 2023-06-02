import {Request, Response, NextFunction} from "express";

export const getTask = (req:Request,res:Response,next:NextFunction) => {
  res.json({
      title:"eat",
      date:"20220101",
      finished:false,
  })
}