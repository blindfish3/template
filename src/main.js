import App from './components/App.svelte';
import './global.scss';

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

export default app;
