<script>
  import { Hero, Services, Team, Articles} from "$lib";
  import Seo from "$lib/assets/Seo.svelte";
  export let data;
  import { setContext } from 'svelte';
	import { writable } from 'svelte/store';


	const articles = writable();
	$: articles.set(data.data);

	setContext('articles', articles);
</script>

<Hero />
<Services/>
<Team/>
<Articles/>
<Seo title="Baltijos veterinarijos klinika" description="Baltijos klinika jusu augintiniu draugai" url="urlaskazkos" keywords="paslaugos, vet klinika"/>