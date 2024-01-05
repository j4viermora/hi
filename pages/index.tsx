import { About } from "../components/About";
import { Header } from "../components/Header";
import { Home as HomeWork } from "../components/Home";
import Head from "next/head";
import { MyWork } from "../components/MyWork";
import { PublicLayout } from "../layout/PublicLayout";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience/Experience";

export default function Home() {
  return (
    <PublicLayout>
      <>
        <Head>
          <title>Javier Mora</title>
          <meta charSet="utf-8"></meta>
          <meta
            name="description"
            content="Artículos, recursos y tutoriales sobre Desarrollo Web, Frontend, Backend, JavaScript ☕️, React ⚛️, Vue y CSS"
          />
          <meta
            name="keywords"
            content="Javier Mora, Desarrollador web, Portafolio Javier Mora, Javier Mora Venezuela"
          />
          <meta name="robots" content="index" />
        </Head>
        <Header name="Javier Mora" role="Software Developer" />
        {/* <hr /> */}
        {/* <HomeWork /> */}
        <hr />
        <About />
        <hr />
        <Experience />
        <hr />
        <MyWork />
        <hr />
        <Contact />
      </>
    </PublicLayout>
  );
}
