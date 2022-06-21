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
  //@ts-ignore

  const listPost = [...post];

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
          <section className='section is-medium'>
            <h2 className='title mb-6'>Últimos Artículos:</h2>
            <ul>
              {listPost
                //@ts-ignore
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((post: TitlePost) => {
                  return <ListItemPostBlog key={post.title} {...post} />;
                })}
            </ul>
          </section>
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
