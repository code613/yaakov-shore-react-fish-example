import { useStore } from '../App';

export function CountMyFish() {
	const store = useStore();
	return (
		<div>
			<img
				src="https://th.bing.com/th/id/R.23a7f722adb420b30c31efe6ebb157e8?rik=GStpPX6tRyV%2f6w&riu=http%3a%2f%2fwww.thatericalper.com%2fwp-content%2fuploads%2f2017%2f03%2fmaxresdefault-31.jpg&ehk=SxLcnaAnhn9Lpm%2bTobI4dwAy%2f2a%2bI%2bEJjnxHGL1ajUE%3d&risl=&pid=ImgRaw"
				width="500px"
			/>
			<h2>{store.fishes} fish! Ah ha ha ha ha!</h2>
		</div>
	);
}
