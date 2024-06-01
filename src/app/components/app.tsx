"use client";

import { useFormState } from "react-dom";
import getFiles from "../action/getFiles";
import Submit from "./submit";
import Upload from "./upload";
import AnimeCard from "./animeCard";
import { Typography } from "@mui/material";
import DonationDialog from "./popup";


export default function InputFileUpload() {
  var [currentFormState, setFormState] = useFormState(getFiles, {
    error: undefined,
    success: undefined,
  })
  return (
    <div>
      <div>
        {currentFormState.success && !currentFormState.error ? (
          <section>
            <AnimeCard anime={currentFormState.success} />
          </section>
        ) : null}
        {currentFormState.success ? (
          <section>
            <DonationDialog pop={true} />
          </section>
        ) : null}
        {currentFormState.error ? (
          <section>
            <div className="text-center">
              <Typography variant="h1">{currentFormState.error}</Typography>
            </div>
          </section>
        ) : null}
        <section>
          <form action={setFormState}>
            <div className="flex flex-none flex-col items-center m-2">
              <Typography variant="h1" className="text-2xl	">
                {currentFormState.success && !currentFormState.error
                  ? "Search more"
                  : "Upload an anime scene"}
              </Typography>
              <Upload />
              <Submit />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

//
