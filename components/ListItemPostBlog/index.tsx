import { TitlePost } from '../../interfaces/interfaces';
import React from 'react';
import Link from 'next/link';

export const ListItemPostBlog = ({ title, slug, date }: TitlePost) => {
  return (
    <>
      <li className='mb-6 mt-5'>
        <Link href={`/blog/${slug}`}>
          <a>
            <div>
              {/* <img className='mr-3' src={img} /> */}
              <h3 className='title is-5'>{title}</h3>
              <p>{date}</p>
            </div>
          </a>
        </Link>
        <hr />
      </li>
      <style jsx>
        {`
          img {
            width: 50px;
          }
        `}
      </style>
    </>
  );
};
