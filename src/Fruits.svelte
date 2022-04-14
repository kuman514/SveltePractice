<script>
  // Props
	export let fruits;
  export let reverse;
  export let slice;

  let computedFruits = [];
  if (reverse) {
    computedFruits = [...fruits].reverse();
  } else {
    computedFruits = [...fruits];
  }

  if (slice) {
    computedFruits = computedFruits.slice(...slice.split(',').map(item => parseInt(item)));
  }
  
	function deleteFruit() {
		// 배열 렌더링이 갱신되려면 let을 통해 재할당시켜야 한다.
		computedFruits = computedFruits.slice(1);
	}
</script>

<div>
  <ul>
    {#each computedFruits as fruit}
      <li>{fruit}</li>
    {/each}
  </ul>
  <button on:click={deleteFruit}>
    Eat
  </button>
</div>
