<script>
	import { browser } from '$app/environment';
	import backgroundImage from '$lib/assets/sunflower.jpg';
	import backgroundImageWebp from '$lib/assets/sunflower.jpg?format=webp';

	function serveWebp() {
		return browser && document.documentElement.classList.contains('webp');
	}

	const backgroundImageUsed = serveWebp() ? backgroundImageWebp : backgroundImage;
</script>

<svelte:head>
	<title>Sunflower Poem</title>
	<meta name="description" content="A poem about sunflowers" />
	<meta name="theme-color" content="#ffdf00" />
	<link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
	<script
		async
		integrity="sha384-xms8Nhw0czGEIWf0BZpCsaCY9PPeFf6bJ6cG0CNYoVvDK3M0146DNIywperKRSNI"
		src="/modernizr-webp.js"></script>
</svelte:head>

<div class="container" style:background-image={`url(${backgroundImageUsed})`}>
	<div class="panel">
		<div class="content">
			<h1>The Soul of the Sunflower</h1>
			<h2>by Sara Jewett</h2>
			<blockquote>
				<p>The warm sun kissed the earth</p>
				<p>To consecrate thy birth,</p>
				<p>And from his close embrace</p>
				<p>Thy radiant face</p>
				<p>Sprang into sight,</p>
				<p>A blossoming delight.</p>
			</blockquote>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		background-color: $color-theme-2;
		background-position: center center;
		background-size: cover;
		width: 100%;
		min-height: 100vh;
		padding: $spacing-12;
	}

	.panel {
		background: rgba($color-theme-3, $alpha: 0.81);
		box-shadow: $spacing-0 $spacing-0 $spacing-1 $spacing-0 $color-theme-4;
		border-radius: $spacing-4;
		color: #502419;
		margin: auto;
		padding: $spacing-6 $spacing-24;
		height: 100%;
	}

	.content {
		padding: $spacing-4;
	}

	h1,
	h2,
	p {
		font-family: Playfair Display, Times New Roman, Times, serif;
	}
	p {
		font-weight: $font-weight-bold;
		font-family: Lato, Playfair Display, Times New Roman, Times, serif;
		font-size: $font-size-2;
	}
</style>
