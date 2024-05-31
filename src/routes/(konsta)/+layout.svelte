<script>
	import '../../app.css';
	import { isIOS } from '$lib/utils/device';
	import { onMount } from 'svelte';
	import { App, Dialog, DialogButton } from 'konsta/svelte';
	import { browser } from '$app/environment';

	const theme = browser && isIOS() ? 'ios' : 'material';

	let showInstallAppNotification = false;
	/** @type {any} */
	let deferredInstallEvent;

	onMount(() => {
		console.log('onMount 1', browser);
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			console.log('onMount 2 | beforeinstallprompt');
			deferredInstallEvent = e;
			showInstallAppNotification = true;

			console.log('onMount 3 | showInstallAppNotification', showInstallAppNotification);
		});

		window.addEventListener('appinstalled', () => {
			showInstallAppNotification = false;
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
	<Dialog
		opened={showInstallAppNotification}
		onBackdropClick={() => (showInstallAppNotification = false)}
	>
		<svelte:fragment slot="title">Cài đặt ứng dụng</svelte:fragment>
		Hãy cài đặt ứng dụng để có trải nghiệm tốt hơn.
		<svelte:fragment slot="buttons">
			<DialogButton onClick={() => (showInstallAppNotification = false)}>Huỷ</DialogButton>
			<DialogButton strong onClick={handleInstall}>Cài đặt</DialogButton>
		</svelte:fragment>
	</Dialog>
</App>
