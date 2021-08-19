import React from 'react';
import { ListItemWork } from 'components/ListItemWork';
import { projects } from 'data/projects';

export const MyWork = () => {
	return (
		<>
			<section className='section is-medium' id='work'>
				<h2 className='title'>My Work</h2>
				<div className='content'>
					<ul>
						{projects.map((item, index) => (
							<ListItemWork key={index} {...item} />
						))}
					</ul>
				</div>
			</section>
		</>
	);
};
