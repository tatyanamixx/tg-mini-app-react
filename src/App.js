import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};

	return (
		<div className='App'>
			<button className='' onClick={onClose}>
				Close
			</button>
			Work!
		</div>
	);
}

export default App;
