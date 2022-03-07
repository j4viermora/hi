import { About } from '../components/About';
import { Header } from '../components/Header';
import { Home as HomeWork } from '../components/Home';
import Head from 'next/head';
import { MyWork } from '../components/MyWork';
import { PublicLayout } from '../layout/PublicLayout';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience/Experience';

export default function Home() {
	return (
		<PublicLayout>
			<>
				<Head>
					<title>Javier A. Mora</title>
					<meta
						name='description'
						content='Conoce un poco sobre mí y sobre mi trabajo como desarrollador web'
					/>
					<meta
						name='keywords'
						content='Javier Mora, Desarrollo web, Portafolio Javier Mora'
					/>
					<meta name='robots' content='index' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Header name='Javier' role='FullStack JavaScript Developer' />
				<hr />
				<HomeWork />
				<hr />
				<About />
				<hr />
				<MyWork />
				<hr />
				<Experience />
				<hr />
				<Contact />
			</>
		</PublicLayout>
	);
}
