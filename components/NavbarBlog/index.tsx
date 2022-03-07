import React, { useState } from 'react';
import Link from 'next/link';

export const NavbarBlog = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<nav className='navbar is-fixed-top is-transparent'>
			<div className='navbar-brand'>
				<a className='navbar-item'>
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
					<Link href='/blog'>
						<a className='navbar-item' href='#'>
							Blog
						</a>
					</Link>
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
							<Link href='/'>
								<a className='button is-link'>Ir a inicio</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
