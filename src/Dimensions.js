import { Dimensions as RND } from 'react-native';

class Dimensions {
	constructor() {
		this.w = RND.get('window').width;
		this.h = RND.get('window').height;

		console.log('w', this.w);
		console.log('h', this.h);
	}

	w = 0;
	h = 0;

	W = d => this.w * d / 100;
	H = d => this.h * d / 100;
}

export default new Dimensions();
