import React, { FC, useEffect, useState } from 'react';
import { BlogLayout } from '../../layout/BlogLayout';
import Head from 'next/head';

import { getAllFilesMetadata } from '../../lib/mdx';
import { ListItemPostBlog } from '../../components/ListItemPostBlog';
import { TitlePost } from '../../interfaces/interfaces';
import { useRouter } from 'next/router';

interface Props {
  posts: TitlePost[];
}

const blog: FC<Props> = ({ posts }) => {
  const { query } = useRouter();
  const [listPostMetadata, updateListMetadata] = useState(posts);
  const [hasResutl, setHasResult] = useState(true);
  const [isSearchResult, setIsSearchResult] = useState(false);

  useEffect(() => {
    query.q && filterPosts();
  }, [query]);

  const filterPosts = () => {
    const filteredPostMetada = posts.filter((postMetadata) =>
      postMetadata.title.toLocaleLowerCase().includes(`${query.q}`)
    );
    if (filteredPostMetada.length === 0) return setHasResult(false);

    updateListMetadata(filteredPostMetada);
    setHasResult(true);
    setIsSearchResult(true);
  };

  const resetArticlesList = () => {
    updateListMetadata(posts);
    setHasResult(true);
    setIsSearchResult(false);
  };

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
        <section className='section is-medium mt-5'>
          <h2 className='title mb-6'>
            {isSearchResult ? 'Resultado de búsqueda' : 'Últimos Artículos:'}
          </h2>
          {hasResutl ? (
            <ul>
              {listPostMetadata.map((post: TitlePost) => {
                return <ListItemPostBlog key={post.title} {...post} />;
              })}
            </ul>
          ) : (
            <>
              <h2>No hay resultados para tu busqueda...</h2>
              <button className='button mt-5' onClick={resetArticlesList}>
                Ver todos los artículos
              </button>
            </>
          )}
        </section>
      </BlogLayout>
    </>
  );
};

export default blog;

export const getStaticProps = async () => {
  const posts = await getAllFilesMetadata();
  return {
    props: {
      posts,
    },
  };
};
