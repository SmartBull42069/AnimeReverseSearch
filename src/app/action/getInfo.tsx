"use server";
import { finalType } from "../type/Types";
import { fetchType } from "../type/Types";

export default async function getInfo(prev: fetchType) {
  var name =
    prev.anilist.title.english ??
    prev.anilist.title.native ??
    prev.anilist.title.romaji;
  var description = await fetch(
    `https://kitsu.io/api/edge/anime?filter[text]=${name}`
  )
    .then((data) => data.json())
    .then((data) => {
      return data;
    });

  if (description.meta.count == 0) {
    for (const iterator of prev.anilist.synonyms) {
      description = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${iterator}`
      )
        .then((data) => data.json())
        .then((data) => {
          return data;
        });
      if (description.meta.count == 0) {
        break;
      }
    }
  }

  var final: finalType = {
    ...prev,
    description: description.data[0].attributes.description,
    image:
      description.data[0].attributes.posterImage.original ??
      description.data[0].attributes.coverImage.original ??
      description.data[0].attributes.coverImage.tiny,
  };
  return final;
}
