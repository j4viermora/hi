import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<nav className='navbar is-fixed-top is-transparent '>
			<div className='navbar-brand'>
				<a className='navbar-item' href='https://bulma.io'>
					{/* <img
						src='https://bulma.io/images/bulma-logo.png'
						alt='Bulma: a modern CSS framework based on Flexbox'
						width='112'
						height='28'
					/> */}
					Javier A. Mora
				</a>
				<div
					className={`navbar-burger ${open && 'is-active'}`}
					data-target='navbarExampleTransparentExample'
					onClick={() => setOpen(!open)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div
				id='navbarExampleTransparentExample'
				className={`navbar-menu ${open && 'is-active'}`}>
				<div className='navbar-end'>
					<a className='navbar-item' href='#home'>
						Home
					</a>
					<a className='navbar-item' href='#about'>
						About
					</a>
					<a className='navbar-item' href='#work'>
						My Work
					</a>
					<a className='navbar-item' href='#contact'>
						Contact
					</a>
				</div>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='field is-grouped'>
							<a
								href='https://github.com/j4viermora'
								className='button mr-3'
								target='_blank'>
								Github
							</a>
							<Link href='/blog'>
								<a className='button is-link'>My Blog</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
