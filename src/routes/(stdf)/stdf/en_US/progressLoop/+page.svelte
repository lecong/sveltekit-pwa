<!--ProgressLoop Demo-->
<script>
	import { ProgressLoop, Button } from 'stdf/components';

	let percent = 20;
	const changePercentFun = type => {
		if (type === '+10') {
			percent += 10;
			if (percent > 100) {
				percent = 100;
			}
		} else {
			percent -= 10;
			if (percent < 0) {
				percent = 0;
			}
		}
	};
</script>

<div class="m-4 mt-8 font-bold text-lg">Basic usage</div>
<div class="w-1/3 mx-4">
	<ProgressLoop />
</div>

<div class="m-4 mt-8 font-bold text-lg">Different width</div>
<div class="flex flex-grow gap-4 mx-4">
	<div class="flex-1">
		<ProgressLoop strokeWidth={0.5} />
	</div>
	<div class="flex-1">
		<ProgressLoop strokeWidth={1} />
	</div>
	<div class="flex-1">
		<ProgressLoop strokeWidth={6} />
	</div>
</div>

<div class="m-4 mt-8 font-bold text-lg">Straight end</div>
<div class="w-1/3 mx-4">
	<ProgressLoop butt />
</div>

<div class="m-4 mt-8 font-bold text-lg">Counterclockwise direction</div>
<div class="w-1/3 mx-4">
	<ProgressLoop reverse />
</div>

<div class="m-4 mt-8 font-bold text-lg">Custom color</div>
<div class="flex flex-grow gap-2 m-4">
	<div class="flex-1">
		<ProgressLoop injClass="stroke-success dark:stroke-error" />
	</div>
	<div class="flex-1">
		<ProgressLoop gradient={['#CE9FFC', '#7367F0']} />
	</div>
	<div class="flex-1">
		<ProgressLoop gradient={['#CE9FFC', '#7367F0']} reverse />
	</div>
	<div class="flex-1">
		<ProgressLoop trackInjClass="!stroke-primary/20 dark:!stroke-dark/20" />
	</div>
</div>

<div class="m-4 mt-8 font-bold text-lg">Custom text</div>
<div class="flex flex-grow gap-2 m-4">
	<div class="flex-1">
		<ProgressLoop useSlot>
			<div class="text-xs text-center">
				<div>Completed</div>
				<div class="text-lg text-primary dark:text-dark">6666</div>
				<div>step</div>
			</div>
		</ProgressLoop>
	</div>
	<div class="flex-1">
		<ProgressLoop useSlot>
			<div class="text-xs text-center">
				<div>Residual flow</div>
				<div class="text-lg text-primary dark:text-dark">66</div>
				<div>GB</div>
			</div>
		</ProgressLoop>
	</div>
	<div class="flex-1">
		<ProgressLoop useSlot>
			<div class="text-xs">complete 2/3</div>
		</ProgressLoop>
	</div>
</div>

<div class="m-4 mt-8 font-bold text-lg">Transition effect</div>
<div class="flex flex-grow gap-2 m-4">
	<div class="flex-1">
		<ProgressLoop {percent} />
	</div>
	<div class="flex-1">
		<ProgressLoop {percent} butt />
	</div>
	<div class="flex-1">
		<ProgressLoop {percent} strokeWidth={4} />
	</div>
	<div class="flex-1">
		<ProgressLoop {percent} reverse />
	</div>
</div>
<div class="flex flex-grow gap-2 m-4">
	<div class="flex-1">
		<ProgressLoop {percent} duration="150" />
	</div>
	<div class="flex-1">
		<ProgressLoop {percent} duration="500" />
	</div>
	<div class="flex-1">
		<ProgressLoop {percent} duration="1000" />
	</div>
	<div class="flex-1">
		<ProgressLoop {percent} gradient={['#CE9FFC', '#7367F0']} />
	</div>
</div>
<div class="mx-4 pb-8">
	<Button heightIn="0" group size="full">
		<div class="flex">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="flex-1 border-r py-2 active:opacity-80" on:click={() => changePercentFun('-10')}>progress -10</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="flex-1 border-r py-2 active:opacity-80" on:click={() => changePercentFun('+10')}>progress +10</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="flex-1 py-2 active:opacity-80" on:click={() => (percent = 20)}>reset</div>
		</div>
	</Button>
</div>
