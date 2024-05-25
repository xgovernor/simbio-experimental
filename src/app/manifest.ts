import { MetadataRoute } from "next";
import DATA from "@/assets/data/info.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: DATA.title,
    short_name: DATA.title,
    description: DATA.description,
    start_url: ".",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#143B52",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
