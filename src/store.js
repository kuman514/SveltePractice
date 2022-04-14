import { writable } from 'svelte/store';

// 외부에서 쓸 수 있는 형태로 선언
export let store = writable('koishi komeiji');
