<script>
	import { Page, Navbar, Block, Button, List, ListItem, BlockTitle, Link } from 'konsta/svelte';

	import { base } from '$app/paths';
</script>

<Page>
	<Navbar title="My App" />

	<Block strong>
		<p>Here is your SvelteKit & Konsta UI app. Let's see what we have here.</p>
	</Block>
	<BlockTitle>Navigation</BlockTitle>
	<List>
		<ListItem href="{base}/about/" title="About" />
	</List>

	<Block strong class="flex space-x-4">
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button href="{base}/stdf">stdf Theme</Button>
	</Block>
</Page>
