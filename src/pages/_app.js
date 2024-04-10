import "@/styles/globals.css";
import "@/styles/style.css";
// import {PressStart2P} from ' next/font/google ';
import { Main } from "next/document";

// const pressstart2p = PressStart2P({subsets:['latin']});

export default function App({ Component, pageProps }) {
  return (
    <main >
      <Component {...pageProps} />
    </main>
  );
}
