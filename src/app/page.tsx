import App from "./components/app";
import Footer from "./components/foot";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-myColor">
      <main className=" bg-myColor">
        <div className="mt-2 flex flex-col justify-center min-h-screen	flex-1 items-center">
          <Suspense fallback={<h1>Hello</h1>}>
            <App />
          </Suspense>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export const metadata = {
  generator: "Next.js",
  applicationName: "Cleithral",
  referrer: "origin-when-cross-origin",

  keywords: [
    "anime name finder",
    "anime picture recognition",
    "identify anime from picture",
    "anime search by image",
    "anime identification tool",
    "anime image search",
    "find anime by screenshot",
    "anime name search",
    "anime recognition",
    "anime photo search",
    "identify anime from video",
    "anime video recognition",
    "find anime by GIF",
    "anime GIF search",
  ],
  authors: "Rayn",
  creator: "Rayn",
  publisher: "Rayn",
  title:
    "Cleithral - Find Anime by Image, Video, or GIF: Your Go-To Anime Search Engine",
  description:
    "Discover the name of any anime from a picture, video, or GIF with our advanced recognition tool. Quickly and accurately identify your favorite anime characters and scenes with ease. Try it now!",
};
