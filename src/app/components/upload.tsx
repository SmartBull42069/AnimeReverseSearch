import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import checkFile from "../action/checkFile";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Upload() {
  var [currentState, setState] = useState<string | undefined>(undefined);
  return (
    <div className="flex flex-col justify-center items-center">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          name="image"
          onChange={async (event) => {
            var file = event.target.files ? event.target.files[0].name : "";
            var length = event.target.files ? event.target.files.length : 0;
            var fileType = event.target.files ? event.target.files[0].type : "";
            var size = event.target.files ? event.target.files[0].size : 0;
            var result = await checkFile({
              length: length,
              fileType: fileType,
              size: size,
            });
            result.status == false ? (event.target.value = "") : null;
            result.status ? setState(file) : setState(result.error);
          }}
        />
      </Button>

      {currentState ? (
        <div className="text-center	mt-1	">
          <h1 className="ml-2">{currentState}</h1>
        </div>
      ) : null}
    </div>
  );
}
