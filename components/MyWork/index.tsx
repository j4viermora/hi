import React, { useState } from 'react';
import { ListItemWork } from '../ListItemWork';
import { projects } from '../../data/projects';
import { colors } from '../../styles/theme';

export const MyWork = () => {
	const category = {
		design: 'Design',
		development: 'Development',
	};

	const [state, setState] = useState(false);

	const handleSwith = (event: any) => {
		setState(event.target.checked);
	};

	return (
		<>
			<section className='section is-medium' id='work'>
				<div className='is-flex'>
					<h2 className='title'>
						Mi portafolio como{' '}
						{state ? 'Diseñador' : 'Desarrollador'}
					</h2>
					<label className='switch ml-5'>
						<input type='checkbox' onChange={handleSwith} />
						<span className='slider round'></span>
					</label>
				</div>
				<div className='content'>
					{state ? (
						<div>
							<p>
								Tambien puedes ver mi portafolio como diseñador
								en behance
							</p>
							<a
								className='button is-link'
								href='https://www.behance.net/j4viermoragil'
								target='_blank'>
								Ir a Behance
							</a>
						</div>
					) : (
						<ul>
							{projects.map((item, index) => (
								<ListItemWork key={index} {...item} />
							))}
						</ul>
					)}
					<p className='mt-5 '>
						Puedes ver mi perfil a workana{' '}
						<a
							href='https://www.workana.com/freelancer/62d3e6273bc3792e5100c6e539b5a1bd'
							target='_blank'>
							aquí
						</a>
					</p>
				</div>
			</section>
			<style jsx>{`
				/* The switch - the box around the slider */
				.switch {
					position: relative;
					display: inline-block;
					width: 60px;
					height: 34px;
				}

				/* Hide default HTML checkbox */
				.switch input {
					opacity: 0;
					width: 0;
					height: 0;
				}

				/* The slider */
				.slider {
					position: absolute;
					cursor: pointer;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: #ccc;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				.slider:before {
					position: absolute;
					content: '';
					height: 26px;
					width: 26px;
					left: 4px;
					bottom: 4px;
					background-color: white;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				input:checked + .slider {
					background-color: ${colors.primary};
				}

				input:focus + .slider {
					box-shadow: 0 0 1px #2196f3;
				}

				input:checked + .slider:before {
					-webkit-transform: translateX(26px);
					-ms-transform: translateX(26px);
					transform: translateX(26px);
				}

				/* Rounded sliders */
				.slider.round {
					border-radius: 34px;
				}

				.slider.round:before {
					border-radius: 50%;
				}
			`}</style>
		</>
	);
};
