import { Project } from 'interfaces/interfaces';
import React from 'react';

export const ListItemWork = ({
	title,
	description,
	linkRepo,
	linkOnline,
}: Project) => {
	return (
		<li>
			<h3 className='title is-5 mt-6'>{title}</h3>
			<p>{description}</p>
			<a
				className='button is-outlined is-link  mr-1 mb-1'
				href={linkRepo}
				target='_blank'>
				See repository
			</a>
			{linkOnline && (
				<a className='button' href={linkOnline} target='_blank'>
					See online
				</a>
			)}
		</li>
	);
};
