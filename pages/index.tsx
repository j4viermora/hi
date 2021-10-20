import { About } from "components/About";
import { Header } from "components/Header";
import { Home as HomeWork } from "components/Home";
import Head from "next/head";
import { MyWork } from "components/MyWork";
import { PublicLayout } from "layout/PublicLayout";
import { Contact } from "components/Contact";

export default function Home() {
  return (
    <PublicLayout>
      <>
        <Head>
          <title>Jonah Alejos</title>
          <meta
            name="description"
            content="Conoce un poco sobre mí y sobre mi trabajo como diseñador y creador de contenido"
          />
          <meta
            name="keywords"
            content="Jonathan Alejos, Diseñador, Portafolio Jonathan"
          />
          <meta name="robots" content="index" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header name="Jonathan" role="Diseñador y creador de contenido" />
        <hr />
        <HomeWork />
        <hr />
        <About />
        <hr />
        <MyWork />
        <hr />
        <Contact />
      </>
    </PublicLayout>
  );
}
