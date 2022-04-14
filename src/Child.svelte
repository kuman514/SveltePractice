<script>
  import { store } from './store.js';
  export let nonStoreProp;
</script>

<div>
  Child {nonStoreProp} {$store}
</div>
