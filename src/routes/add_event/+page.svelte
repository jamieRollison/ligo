<script>
  import { isAuthenticated } from "../../store";
</script>

<!-- TODO: styling - add another graphic at the top of this page - maybe svgs around the whole thing? -->
<!-- TODO: backend - default is not authenticated, ugly loading -->

<div class="my-10 md:mx-40 lg:mx-60">
  <div class={$isAuthenticated ? `hidden` : ""}>
    <h3 class="font-WorkSans text-red-700 italic text-center py-2">
      Please log in before continuing
    </h3>
  </div>

  <div class={$isAuthenticated ? `opacity-100` : `opacity-25`}>
    <div>
      <h1
        class="font-WorkSans text-4xl text-white flex justify-center text-center mb-10"
      >
        Are you an Organizer or Attendee of this event?
      </h1>
      <img src="assets/girl_holding.png" alt="girl holding a calendar" />
    </div>

    <div
      class="flex flex-col items-center mt-10 space-y-2 md:flex-row md:justify-center md:space-x-8"
    >
      <a
        class="w-48 text-center font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
        href={$isAuthenticated ? `/add_event/organizer` : ""}
        >Organizer
      </a>
      <a
        class="w-48 text-center font-WorkSans  bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
        href={$isAuthenticated ? `/add_event/attendee` : ""}
        >Attendee
      </a>
    </div>
  </div>
</div>
