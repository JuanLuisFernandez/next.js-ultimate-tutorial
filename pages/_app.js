import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import AllArticles from "../components/AllArticles";
import Article from "../components/Article";
import PopularArticles from "../components/PopularArticles";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  "all-articles": AllArticles,
  article: Article,
  "popular-articles": PopularArticles,
};

storyblokInit({
  accessToken: "7uMFNihPkMeGilj0Opdzswtt",
  // for spaces located in the US or China:
  // apiOptions: {
  //   region: "us" or "cn", // you need to specify the region
  // },
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
