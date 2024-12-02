import React from 'react';

import { useTelegram } from '../hooks/useTelegram';

function Header() {
	const { user, onClose } = useTelegram();

	return (
		<nav className='green darken-1 nav-extended'>
			<div className='container'>
				<div className='nav-wrapper'>
					
						RECIPE
					
                    <button onClick={onClose}>Close</button>
					<h4>username: {user?.username}</h4>
					<h4>id: {user?.id}</h4>
					<h6>first_name: {user?.first_name}</h6>
					<h6>last_name: {user?.last_name}</h6>
					<h6>is_bot?:{user?.is_bot}</h6>
				</div>
			</div>
		</nav>
	);
}
export { Header };
