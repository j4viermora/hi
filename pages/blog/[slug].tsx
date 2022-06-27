import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { GetStaticPaths, GetStaticProps } from 'next';

import { getFileBySlug, getFiles } from '../../lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { BlogLayout } from '../../layout/BlogLayout';
import MDXComponents from '../../components/MDXComponents';
import { IFrontmatter } from '../../interfaces/interfaces';

interface IProps {
  source: {
    compiledSource: string;
    scope?: {};
  };
  frontmatter: IFrontmatter;
}

export const SinglePost = ({ source, frontmatter }: IProps) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta charSet='utf-8'></meta>
        <meta name='description' content={frontmatter.content}></meta>
        <meta name='keywords' content={frontmatter.keywords} />
      </Head>
      <BlogLayout>
        <section className='section is-medium'>
          <div className='is-flex is-align-items-center mb-5'>
            <figure className='mr-2'>
              <img
                style={{
                  borderRadius: '50%',
                  width: '50px',
                }}
                src='https://avatars.githubusercontent.com/u/55900303?v=4'
                alt='javier mora j4viermora'
              />
            </figure>
            <div>
              <h3 className='mb-2'>Javier Mora</h3>
            </div>
          </div>

          <div className='content'>
            <MDXRemote {...source} components={MDXComponents} />
          </div>
          <hr />
          <h4 className='title is-6'>Sígueme en mis redes sociales:</h4>
          <div>
            <article className='is-flex is-align-items-center'>
              <Image width={'40'} height={'40'} src='/twitter.svg' />
              <span
                style={{
                  width: 10,
                }}></span>
              <a href='https://twitter.com/j4viermora' target='_blank'>
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

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
