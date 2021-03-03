import { observable, action, autorun, decorate } from 'mobx'
import { register, login } from './api/api'

class AppStore {
	authToken = '';


	setToken(token) {
		this.authToken = token;
		localStorage.setItem('authToken', token);
	}

	async register(email, password) {
		const token = await register(email, password);
		this.setToken(token);
		return token;
	}

	async login(email, password) {
		const token = await login(email, password);
		this.setToken(token);
		return token;
	}

	signout(){
		this.authToken = '';
		localStorage.setItem('authToken', '');
	}
}

decorate(AppStore, {
	authToken: observable,
	setToken: action,
});

const appStore = new AppStore();

autorun(() => {
	const token = localStorage.getItem('authToken');

	if (token) {
		appStore.setToken(token);
	}
});

export default appStore;