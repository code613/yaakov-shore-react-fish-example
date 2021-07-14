import './App.css';
import { useState } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { CountMyFish } from './components/CountMyFish';
import {CountMySmellyFish} from './components/CountMySmellyFish'

export const useStore = create(
	persist(
		(set, get) => ({
			fishes: 1,
			addAFish: () => set({ fishes: get().fishes + 1 })
		}),
		{
			name: 'food-storage', // unique name
			getStorage: () => sessionStorage // (optional) by default the 'localStorage' is used
		}
	)
);

function App() {
	const [ stateFishes, setStatefulFish ] = useState(1);
	const store = useStore();
	return (
		<div className="App">
			<button onClick={store.addAFish}>increment fish</button>
			<p>{'🐟'.repeat(store.fishes)}</p>
			<CountMyFish />
			<p>This is a boring 'useState' version</p>
			<button onClick={() => setStatefulFish(stateFishes + 1)}>Add a smelly fish</button>
      <CountMySmellyFish fishCount={stateFishes} />
  	</div>
	);
}

export default App;
