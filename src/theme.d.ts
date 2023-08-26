import React from "react";
import { PaletteColor, PaletteColorOptions, ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        mycolor?: PaletteColor
    }
    
    interface PaletteOptions {
        mycolor?: PaletteColorOptions
    }
}
