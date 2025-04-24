import { useEffect } from 'react';
import './App.css';
import { viewport, init, isTMA } from '@telegram-apps/sdk';

import { useTelegram } from './hooks/useTelegram';

import { Header } from './components/Header';

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	});

	useEffect(() => {
		async function initTg() {
			if (await isTMA()) {
				init();

				if (viewport.mount.isAvailable()) {
					await viewport.mount();
					viewport.expand();
				}

				if (viewport.requestFullscreen.isAvailable()) {
					await viewport.requestFullscreen();
				}
			}
		}
		initTg();
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			{/* <Routes>
				<Route index element={<ProductList />} />
				<Route path={'form'} element={<Form />} />
			</Routes> */}
		</div>
	);
}

export default App;
