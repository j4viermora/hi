import { TitlePost } from 'interfaces/interfaces';
import React from 'react';
import Link from 'next/link';

export const ListItemPostBlog = ({ title, slug, img }: TitlePost) => {
	return (
		<>
			<li className='mb-6'>
				<Link href={`/blog/${slug}}`}>
					<a>
						<div className='is-flex is-align-items-center'>
							<img className='mr-3' src={img} />
							<h3 className='title is-5'>{title}</h3>
						</div>
					</a>
				</Link>
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
