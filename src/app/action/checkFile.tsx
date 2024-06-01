"use server"

import { error } from "console";

export default async function checkFile(info:{size:number,length:number,fileType:string}|undefined){
  if (info!=undefined) {
    if (info.length != 1) {
      return {
        status: false,
        error: "Please select only one file ",
      };
    } else if (info.size > 4000000) {
      return {
        status: false,
        error:
          "Max file size is 4mb; either reduce it or just take a screenshot of the scene and upload the screenshot instead.",
      };
    } else if (info.size == 0) {
      return {
        status: false,
        error: "Please select one file ",
      };
    } else if (
      info.fileType != "image/jpeg" &&
      info.fileType != "image/png" &&
      info.fileType != "image/gif" &&
      info.fileType != "video/mp4"
    ) {
      return {
        status: false,
        error: "Invalid file format",
      };
    } else {
      return { status: true, error: undefined };
    }
  }
  else{
    return{status:false,error:"no file"}
  }
}
