import React from 'react';
import { BlogLayout } from '../../layout/BlogLayout';
import Head from 'next/head';

import { getAllFilesMetadata } from '../../lib/mdx';
import { ListItemPostBlog } from '../../components/ListItemPostBlog';
import { TitlePost } from '../../interfaces/interfaces';

interface Props {
	post: TitlePost[];
}

const blog = ({ post }: Props) => {
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
						{/* <section className='section mt-6 is-flex is-justify-content-center'>
							<div className='card mx-3'>
								<div className='card-content'>JavaScript</div>
							</div>
							<div className='card mx-3'>
								<div className='card-content'>Css</div>
							</div>
							<div className='card mx-3'>
								<div className='card-content'>Html</div>
							</div>
						</section> */}
						{/* <hr /> */}
						<section className='section'>
							{/* <h2 className='title is-1 mb-6'>
								This section is under construction
							</h2> */}
							<h2 className='title mb-6'>Últimos Artículos:</h2>
							<ul>
								{post.slice(0, 5).map((post: TitlePost) => (
									<ListItemPostBlog
										key={post.title}
										{...post}
									/>
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

export const getStaticProps = async () => {
	const post = await getAllFilesMetadata();
	return {
		props: {
			post,
		},
	};
};
