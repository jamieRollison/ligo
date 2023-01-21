<script>
  import { onMount } from 'svelte';
	import auth from '../../authService';
import { isAuthenticated, user } from '../../store'

  /**
	 * @type {import("@auth0/auth0-spa-js").Auth0Client}
	 */
  let auth0Client;
  
  onMount(async () => {
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });

  function login(){
    // @ts-ignore
    auth.loginWithPopup(auth0Client, {});
  }

  function logout() {
    auth.logout(auth0Client);
  }

  /**
	 * @type {HTMLDivElement}
	 */
  let menu;

</script>


<nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a class="flex" href="/">
        <img alt="ligo logo" src="/assets/logo.png"class="w-10 mr-2">
        <span class="font-Jomhuria text-5xl">Ligo</span>
        </a>
    </div>
    <div class="block lg:hidden">
      <button on:click="{() => menu.classList.toggle('hidden')}"
      class="flex items-center md:hidden px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>

    <div class="hidden w-full md:flex md:items-center md:w-auto" bind:this={menu}>
      <ul class="text-sm md:flex md:justify-between ">
        <li>
          <a href="/how_it_works" class="font-WorkSans block mt-2 md:mt-0 pl-6 md:pl-0 text-cyan-100 hover:text-white mr-4"> 
          How it Works
        </a>
        </li>
        <li>
          <a href="/about" class="font-WorkSans block mt-2 md:mt-0 pl-6 md:pl-0  text-cyan-100 hover:text-white mr-4">
          About
        </a>
        </li>

        {#if $isAuthenticated}
        <li class="mt-4 md:mt-0 ml-6 md:ml-0">
          <span class="hidden md:inline font-WorkSans pl-2 py-2 mr-4 mt-2 text-sm leading-none text-white lg:mt-0">
            Hi, {$user.given_name}
          </span>
          <a href="#" 
          on:click={logout}
          class="font-WorkSans text-sm px-6 py-2 mt-2 md:mt-0 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Log out</a>
        </li>
        {:else}
        <li class="mt-2 md:mt-0">
          <a href="#" 
          on:click={login}
          class="font-WorkSans text-sm px-6 py-2 mt-2 md:mt-0 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Log in</a>
        </li>
        {/if}

      </ul>
    </div>
  </nav>