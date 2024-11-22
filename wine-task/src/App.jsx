import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Wine } from './Wine';

function App() {
	return (
		<>
			<Wine
				title="Красное вино Château Margaux  
	2015"
				description="Франция, красное, 0.75 л."
				rating="4.8"
			/>

			<Wine
				title="Белое вино Cloudy Bay  
	Sauvignon Blanc 2021"
				description="Новая Зеландия, белое, 0.75 л."
				rating="4.5"
			/>

			<Wine
				title="Игристое вино Moët & Chandon  
	Brut Impérial"
				description="Франция, игристое, 0.75 л."
				rating="4.7"
			/>

			<Wine
				title="Розовое вино Whispering Angel  
	Provence Rosé 2020"
				description="Франция, розовое, 0.75 л."
				rating="4.9"
			/>

			<Wine
				title="Красное вино Antinori Tignanello  
	2019"
				description="Италия, красное, 0.75 л."
				rating="4.6"
			/>

			<Wine
				title="Белое вино Riesling Trimbach  
	Cuvée Frédéric Emile 2017"
				description="Франция, белое, 0.75 л."
				rating="4.8"
			/>
		</>
	);
}

export default App;
