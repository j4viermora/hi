import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { TitlePost } from '../interfaces/interfaces';

const root = process.cwd();

export const getFiles = (): string[] => {
  return fs.readdirSync(path.join(root, 'data/articles'));
};

export const getFileBySlug = async (slug: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'data/articles', `${slug}.mdx`),
    'utf-8'
  );

  const { data, content } = await matter(mdxSource);

  const source = await serialize(content);

  return {
    source,
    frontmatter: {
      ...data,
      slug,
    },
  };
};

export const getAllFilesMetadata = async (): Promise<TitlePost> => {
  const files = getFiles();
  return files.reduce((allPost: any, postSlug: any): any => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'data/articles', postSlug)
    );
    const { data } = matter(mdxSource);
    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPost,
    ];
  }, []);
};
