<script>
  import Child from './Child.svelte';

  // App에서 받아온 prop을 오직 Child에게 전달하는데만 쓰임
  // 즉, 매개체 역할밖에 못하고 Parent 본인에겐 쓸모가 없는!
  // Prop Drilling 발생!
  export let nonStoreProp;
</script>

<div>
  Parent
</div>
<Child
  nonStoreProp={nonStoreProp}
/>
