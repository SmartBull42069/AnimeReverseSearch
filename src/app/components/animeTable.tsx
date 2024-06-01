import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import AnimeText from "./animeText";
import { finalType } from "../type/Types";
import { Typography } from "@mui/material";

export default function AnimeTable(prop:{anime:finalType}) {
    return (
      <TableContainer>
        <Table>
          <TableRow>
            <TableCell variant="head">Name</TableCell>
            <TableCell>
              <AnimeText
                text={
                  Object.values(prop.anime.anilist.title)
                    .filter((item) => item != null)
                    .filter((v, i, self) => {
                      return i == self.indexOf(v);
                    })
                    .join(" | ") +
                  " | " +
                  prop.anime.anilist.synonyms
                    .filter((item) => item != null)
                    .filter((v, i, self) => {
                      return i == self.indexOf(v);
                    })
                    .join(" | ")
                }
              ></AnimeText>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Description</TableCell>
            <TableCell>
              <AnimeText text={prop.anime.description}></AnimeText>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Episode</TableCell>
            <TableCell>
              <Typography>{prop.anime.episode}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">From</TableCell>
            <TableCell>
              <Typography>
                {new Date(prop.anime.from * 1000).toISOString().slice(11, 19)}{" "}
                to {new Date(prop.anime.to * 1000).toISOString().slice(11, 19)}
              </Typography>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    );
}
