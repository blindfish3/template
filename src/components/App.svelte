<svelte:head>
	<title>Svelte template</title>
</svelte:head>

<h1>Hello {name}!</h1>
<Panel label="demo component">Some <em>random</em> content...</Panel>
<style>
	h1 {
		color: purple;
	}
</style>

<script>
	export default {
		components: {
			Panel: './demo-components/Panel.svelte'
		}
	}
</script>
