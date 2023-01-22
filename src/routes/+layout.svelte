<script>
  import "$lib/styles/app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";


  // export function load() {
  //   return {
  //     deploymentGitBranch: VERCEL_COMMIT_REF
  //   };
  // }
</script>

<main>
  <Nav />
  <slot />
  <div class="flex justify-center">
    <Footer />
  </div>
</main>
