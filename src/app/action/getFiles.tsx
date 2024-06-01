"use server";

import { fetchType } from "../type/Types";
import getInfo from "./getInfo";
import { finalType } from "../type/Types";

export default async function getFiles(
  prevState: { error: string | undefined; success: fetchType | undefined },
  form: FormData
) {
  var answer: { error: string | undefined; success: finalType | undefined } = {
    error: undefined,
    success: undefined,
  };
  var file = form.getAll("image") as File[];
  var url = "https://api.trace.moe/search?anilistInfo";
  var client_id = process.env.CLIENT_ID;

  if (file.length != 1) {
    answer.error = "Please select only 1 file";
  } else if (
    file[0].type != "image/jpeg" &&
    file[0].type != "image/png" &&
    file[0].type != "image/gif" &&
    file[0].type != "video/mp4"
  ) {
    answer.error = "Invalid file format";
  } 
  else if(file[0].size>4000000){
    answer.error="Too large size.Max file size is 4mb"
  }
  else {
    var req = await fetch(url, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) =>
        getInfo({
          episode: data.result[0].episode,
          from: data.result[0].from,
          anilist: {
            title: {
              english: data.result[0].anilist.title?.english,
              native: data.result[0].anilist.title?.native,
              romaji: data.result[0].anilist.title?.romaji,
            },
            synonyms: data.result[0].anilist.synonyms,
          },
          to: data.result[0].to,
          video: data.result[0].video,
        })
      )
      .then((final) => (answer.success = final));
  }

  return answer;
}
