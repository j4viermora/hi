import React from 'react';

export const Experience = () => {
	return (
		<section className='section is-medium' id='experience'>
			<div className='is-flex'>
				<h2 className='title'>Experiencia</h2>
			</div>
			<div className='content'>
				<ul>
					<li>
						<h3 className='title is-5 mt-6'>
							Alegra web - frontend developer abril 2022 -
							Actualidad
						</h3>
						<p>Desarrollador frontend con VueJs</p>
					</li>
					<li>
						<h3 className='title is-5 mt-6'>
							Aras gruop - frontend dev agosto 2021 - Enero 2022
						</h3>
						<p>
							Desarrollo de su plataforma interna para gestion de
							portafolios de inversión, todo bajo ReactJS y React
							Native
						</p>
					</li>
					<li>
						<h3 className='title is-5 mt-6'>
							Social Buey Agencia digital Abril 2020 - Julio 2021
						</h3>
						<p>
							Diseño he implementación de sitios web, construidos
							con elementor page builder
						</p>
					</li>
					<li>
						<h3 className='title is-5 mt-6'>
							Diseñador web freelancer Octubre 2019 - Marzo 2022
						</h3>
						<p>
							Diseño e implementación de sitios webs, construidos
							con wordpress y estaticos, puedes ver mi perfil de
							workana{' '}
							<a
								href='https://www.workana.com/freelancer/62d3e6273bc3792e5100c6e539b5a1bd'
								target='_blank'>
								aquí
							</a>
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};
