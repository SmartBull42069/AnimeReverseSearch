"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";


export default function AnimeText(prop:{text:string}){
    var [currentState, setState] = useState(prop.text.slice(0, 101));
    if (currentState.length!=prop.text.length) {
        return (
          <Typography variant="body1">
            {currentState}...
            <Link
              onClick={() => setState(prop.text)}
              className="cursor-pointer	"
            >
              read more
            </Link>
          </Typography>
        );
    }
    else {
        return (
          <Typography variant="body1">
            {currentState}.
            {prop.text.length > 101 ? (
              <Link
                className="cursor-pointer	"
                onClick={() => setState(prop.text.slice(0, 101))}
              >
                <br /> read less
              </Link>
            ) : null}
          </Typography>
        );
    }
}