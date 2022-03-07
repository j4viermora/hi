import type { AppProps } from 'next/app';
import '../styles/bulma.min.css';
import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
export default MyApp;
