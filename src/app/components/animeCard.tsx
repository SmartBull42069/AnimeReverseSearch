import { finalType } from "../type/Types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AnimeTable from "./animeTable";
import { Typography } from "@mui/material";

export default function AnimeCard(prop: { anime: finalType }) {
    var animeTitle=
          prop.anime.anilist.title.english ??
          prop.anime.anilist.title.native ??
          prop.anime.anilist.title.romaji;
  return (
    <div>
      <Card
        className="bg-myColor flex flex-col justify-center items-center"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardMedia
          component="img"
          className="size-auto"
          title={animeTitle ? animeTitle : "Unknown"}
          image={prop.anime.image}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {animeTitle ? animeTitle : "unknown"}
          </Typography>
          <AnimeTable anime={prop.anime}></AnimeTable>
        </CardContent>
        <CardMedia
          component="video"
          className="size-1/2 mb-3"
          title={animeTitle ? animeTitle : "Unknown"}
          image={prop.anime.video}
          controls
        />
      </Card>
    </div>
  );
}