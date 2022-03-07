import React from 'react';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import { BlogLayout } from '../../layout/BlogLayout';
import MDXComponents from '../../components/MDXComponents';
import Image from 'next/image';

export const SinglePost = ({ source, frontmatter }: any) => {
	return (
		<>
			<Head>
				<title>{frontmatter.title}</title>
				<meta content={frontmatter.title}></meta>
			</Head>
			<BlogLayout>
				<section className='section is-medium'>
					<div className='content'>
						<MDXRemote {...source} components={MDXComponents} />
					</div>
					<hr />
					<h4 className='title is-6'>
						Sígueme en mis redes sociales:
					</h4>
					<div>
						<article className='is-flex is-align-items-center'>
							<Image
								width={'40'}
								height={'40'}
								src='/twitter.svg'
							/>
							<span
								style={{
									width: 10,
								}}></span>
							<a href='https://j4viermora' target='_blank'>
								@j4viermora
							</a>
						</article>
					</div>
				</section>
			</BlogLayout>
		</>
	);
};

export default SinglePost;

export const getStaticProps: GetStaticProps = async ({
	params: { slug },
}: any) => {
	const { source, frontmatter } = await getFileBySlug(slug);
	return {
		props: {
			source,
			frontmatter,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getFiles();

	const paths = posts.map((post) => ({
		params: {
			slug: post.replace('.mdx', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};
