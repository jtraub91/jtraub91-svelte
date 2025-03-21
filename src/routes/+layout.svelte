<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="flex flex-col min-w-[420px]">
	<Header />
		<div class="flex flex-col">
			{@render children()}
		</div>
	<Footer />
</div>

