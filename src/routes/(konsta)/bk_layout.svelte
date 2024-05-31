<script>
	import { isIOS } from '$lib/utils/device';
	import { onMount } from 'svelte';
	import '../app.css';
	import { App, Button, Icon, Notification } from 'konsta/svelte';
	import logo from '$lib/images/svelte-logo.svg';

	const theme = isIOS() ? 'ios' : 'material';

	let showInstallAppNotification = false;
	/** @type {any} */
	let deferredInstallEvent;

	onMount(() => {
		console.log('onMount 1');
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			console.log('onMount 2 | beforeinstallprompt');
			deferredInstallEvent = e;
			showInstallAppNotification = true;

			console.log('onMount 3 | showInstallAppNotification', showInstallAppNotification);
		});
	});

	async function handleInstall() {
		console.log('handleInstall 1');
		deferredInstallEvent.prompt();
		console.log('handleInstall 2');
		let choice = await deferredInstallEvent.userChoice;
		if (choice.outcome === 'accepted') {
			// User accepted to install the application
			console.log('handleInstall 3 accepted');
		} else {
			// User dismissed the prompt
			console.log('handleInstall 4 dismissed');
		}
		deferredInstallEvent = undefined;
	}
</script>

<App {theme}>
	<slot />
	<Notification
		opened={showInstallAppNotification}
		title="SvelteKit PWA"
		subtitle="Cài đặt ứng dung"
		text="Cài đặt ứng dụng để có trải nghiệm tốt hơn."
		onClose={() => (showInstallAppNotification = false)}
	>
		<Icon slot="icon">
			<img src={logo} alt="icon" />
		</Icon>
		<Button slot="button" onClick={handleInstall}>Cài đặt</Button>
	</Notification>
</App>
