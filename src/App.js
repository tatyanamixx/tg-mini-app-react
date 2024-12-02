import { useEffect } from 'react';
import './App.css';

import { useTelegram } from './hooks/useTelegram';

import { Header } from './components/Header';

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	});

	return (
		<div>
			<Header />
			{/* <Routes>
				<Route index element={<ProductList />} />
				<Route path={'form'} element={<Form />} />
			</Routes> */}
		</div>
	);
}

export default App;
