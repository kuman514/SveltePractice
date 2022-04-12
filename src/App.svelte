<script>
	//import { onMount } from 'svelte';

	let name = 'koishi';
	let num = 514;
	function assign() {
		name = 'kuman';
		num = 55;
	}

	// first #, middle :, end /
	let toggle = false;

	// #each <Array> as <ArrayItem>
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
	function deleteFruit() {
		// 배열 렌더링이 갱신되려면 let을 통해 재할당시켜야 한다.
		fruits = fruits.slice(1);
	}

	let isRed = false;
	/*
	onMount(() => {
		const box = document.querySelector('.box');
		box.addEventListener('click', () => { isRed = !isRed; });
	});
	*/

	function enter() {
		name = 'enter';
	}

	function leave() {
		name = 'leave';
	}

	let text = '';
</script>

<main>
	<div>
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
	</div>
	
	<div>
		<button on:click={() => {toggle = !toggle;}}>
			Toggle
		</button>
		{#if toggle}
			Hey I am here!
		{:else}
			...?
		{/if}
	</div>

	<div>
		<ul>
			{#each fruits as fruit}
				<li>{fruit}</li>
			{/each}
		</ul>
		<button on:click={deleteFruit}>
			Eat
		</button>
	</div>

	<div
		class="box"
		style="background-color: {isRed ? 'red' : 'greenyellow'}"
		on:click={() => {isRed = !isRed;}}
		on:mouseenter={enter}
		on:mouseleave={leave}
	>
		Box!
	</div>

	<div>
		<div>
			{text}
		</div>
		<!-- input
			type="text"
			value={text}
			on:input={(e) => {text = e.target.value;}}
		/ -->
		<input
			type="text"
			bind:value={text}
		/>
		<button on:click={() => {text = 'input koishi';}}>
			asdf
		</button>
	</div>
</main>

<style>
	h1 {
		color: red;
	}

	.active {
		color: blue;
	}

	.box {
		width: 300px;
		height: 150px;
		background-color: greenyellow;
	}
</style>