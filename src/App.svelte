<script>
	let name = 'koishi';
	let num = 514;
	function assign() {
		name = 'kuman';
		num = 55;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2 class={num < 85 ? 'active' : ''}>
		{num}
	</h2>
	<img src="" alt={name} />
	<!-- input type="text" value={name} / -->
	<input type="text" bind:value={name} />
	<button on:click={assign}>
		assign
	</button>
</main>

<style>
	h1 {
		color: red;
	}

	.active {
		color: blue;
	}
</style>