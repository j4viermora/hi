import React from 'react';
import { BlogLayout } from 'layout/BlogLayout';
import Head from 'next/head';
import { ListItemPostBlog } from 'components/ListItemPostBlog';
import { TitlePost } from 'interfaces/interfaces';
const blog = () => {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta
					name='description'
					content='Blog sobre desarrollo web y tecnología by Javier Mora'
				/>
				<meta
					name='keywords'
					content='Blog desarrollo web, Desarrollo web, JavaScript tips'
				/>
				<meta name='robots' content='index' />
			</Head>
			<BlogLayout>
				<>
					<main className='container'>
						<section className='section mt-6 is-flex is-justify-content-center'>
							<div className='card mx-3'>
								<div className='card-content'>JavaScript</div>
							</div>
							<div className='card mx-3'>
								<div className='card-content'>Css</div>
							</div>
							<div className='card mx-3'>
								<div className='card-content'>Html</div>
							</div>
						</section>
						<hr />
						<section className='section'>
						<h2 className='title is-1 mb-6'>This section is under construction</h2>
							<h2 className='title'>Últimos Artículos:</h2>
							<ul>
								{titlePost.slice(0, 5).map((item) => (
									<ListItemPostBlog key={item.id} {...item} />
								))}
							</ul>
						</section>
					</main>
				</>
			</BlogLayout>
		</>
	);
};

export default blog;

const titlePost: TitlePost[] = [
	{
		img: 'https://midu.dev/images/tags/javascript.png',
		title: 'Eliminar primer carácter de una cadena de texto en JavaScript',
		slug: 'titulo-unico-del-post',
		id: 1,
	},
	{
		img: 'https://midu.dev/images/tags/css.png',
		title: 'Las Mejores formas de centrar elementos en css',
		slug: 'titulo-unico-del-post',
		id: 2,
	},
	{
		img: 'https://midu.dev/images/tags/javascript.png',
		title: 'Las Mejores formas de centrar elementos en css',
		slug: 'titulo-unico-del-post',
		id: 3,
	},
	{
		img: 'https://midu.dev/images/tags/javascript.png',
		title: 'Las Mejores formas de centrar elementos en css',
		slug: 'titulo-unico-del-post',
		id: 4,
	},
	{
		img: 'https://midu.dev/images/tags/css.png',
		title: 'Las Mejores formas de centrar elementos en css',
		slug: 'titulo-unico-del-post',
		id: 5,
	},
	{
		img: 'https://midu.dev/images/tags/javascript.png',
		title: 'Las Mejores formas de centrar elementos en css',
		slug: 'titulo-unico-del-post',
		id: 6,
	},
];
