<script>
	import SEO from '$lib/components/SEO.svelte';
	import SearchBarAndButton from '$lib/components/SearchBarAndButton.svelte';
</script>

<SEO />
<div class="flex flex-col items-center md:flex-row ">
	<img class="w-60 lg:w-1/2" src="/assets/recycle_2.png" alt="recycle_2 throwing out trash" />
	<div class="flex flex-col">
		<h1 class="font-Jomhuria text-9xl text-white">Ligo</h1>
		<p class="font-WorkSans text-white text-2xl">
			Your new tool to calculate the environmental impact of your coordinated event, and helping the
			environment through analyzing your carbon footprint.
		</p>
		<SearchBarAndButton />
	</div>
</div>

<style>
	img:hover {
		/* Start the shake animation and make the animation last for 0.5 seconds */
		animation: shake 0.5s;

		/* When the animation is finished, start again */
		animation-iteration-count: infinite;
	}

	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
</style>
