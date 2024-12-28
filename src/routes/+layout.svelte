<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="flex flex-col h-screen">
	<Header />
		<div class="flex flex-col grow">
			<div class="mx-auto">
				{@render children()}
			</div>
		</div>
	<Footer />
</div>

