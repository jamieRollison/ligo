<script>
  import "$lib/styles/app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main>
  <Nav />
  <slot />
  <div class="flex justify-center">
    <Footer />
  </div>
</main>
