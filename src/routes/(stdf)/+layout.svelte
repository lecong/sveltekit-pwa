<script>
	import { setContext, onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../../app.css';
	import en_US from 'stdf/lang/en_US'; // import language file
	import menuList from '$lib/data/menuList';
	import NavBar from 'stdf/components/navBar/NavBar.svelte';
	import Icon from 'stdf/components/icon/Icon.svelte';

	// 循环 menuList，将所有元素的 childs 组成一个数组
	// Cycle menuList, and combine the childs of all elements into an array
	/**
	 * @type {any[]}
	 */
	const menuListArr = menuList.reduce((/** @type {any[]} */ acc, cur) => {
		if (cur.childs) {
			acc.push(...cur.childs);
		}
		return acc;
	}, []);

	// 使用 `URLSearchParams` 对象来获取 URL 查询参数
	// Use the `URLSearchParams` object to get the URL query parameters
	const urlParams = new URLSearchParams($page.url.search);
	const channel = urlParams.get('channel');
	// 判断是否是 iframe
	// judge whether it is iframe
	const isIframe = channel && channel === 'iframe' ? '1' : '0';
	// 设置iframe
	// setting iframe
	setContext('iframe', isIframe);

	// 环境变量
	// environment variables
	// @ts-ignore
	const mode = import.meta.env.MODE;

	// mode 是否是指定组件模式
	// whether mode is specified component mode
	const isComponentMode = mode != 'production' && mode != 'development' && mode != 'english';

	$: showLeft = !(isIframe === '1' || $page.url.pathname === '/' || isComponentMode);

	let theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
	// 设置主题
	// Set theme
	if (localStorage.getItem('theme') === 'dark') {
		document.documentElement.classList.add('dark');
	} else if (localStorage.getItem('theme') === 'light') {
		document.documentElement.classList.remove('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	//手动切换亮暗模式
	// manually switch light and dark mode
	const toggleFun = () => {
		if (theme === 'dark') {
			// 切换到light
			// switch to light
			theme = 'light';
			localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		} else {
			// 切换到dark
			// switch to dark
			theme = 'dark';
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		}
	};

	// 判断 mode 是否是 English 模式
	// Determine whether mode is English mode
	let lang = 'en_US';
	sessionStorage.setItem('lang', lang);
	setContext('STDF_lang', en_US);

	onMount(() => {});

	let showTheme = false;
	// 切换主题
	// switch theme
	const switchThemeFunc = () => {
		showTheme = !showTheme;
	};
</script>

<div class="sticky z-[100] top-0">
	<NavBar
		title={'STDF Demo'}
		left={showLeft ? 'back' : 'none'}
		rightSlot
		injClass="bg-white/60 dark:bg-black/60 backdrop-blur"
		on:clickleft={() => window.history.back()}
	>
		<div slot="right" class="flex text-center">
			{#if isIframe === '0'}
				<div class="h-12 w-10 leading-10">
					<a href="https://github.com/any-tdf/stdf" target="_blank" rel="noreferrer">
						<Icon name="ri-github-fill" />
					</a>
				</div>
				<div class="h-12 w-10 leading-10">
					<a
						href={`https://stdf.design${$page.url.pathname === '/' ? '' : `/#/components?nav=${$page.url.pathname.substring(7)}&tab=0`}`}
						target="_blank"
						rel="noreferrer"
					>
						<Icon name="ri-compass-line" />
					</a>
				</div>
			{/if}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="h-12 w-10 leading-10" on:click={toggleFun}>
				<Icon name={theme === 'dark' ? 'ri-moon-fill' : 'ri-sun-line'} theme={true} />
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="h-12 w-10 leading-10" on:click={switchThemeFunc}>
				<Icon name="ri-palette-line" theme={true} />
			</div>
		</div>
	</NavBar>
</div>
<slot />
