<script>
  import { page } from "$app/stores";
  import { current_event } from "$lib/stores/events";
  /**
   * @type {{ event: any; }}
   */
  export let data;
</script>

<div class="divide-y">
  <div
    class="flex flex-col space-y-4 md:space-y-2 md:flex-row mx-10 py-4 md:justify-between"
  >
    <div>
      <h1 class="font-Jomhuria text-8xl text-white">
        {$current_event.name}
      </h1>
      <!-- TODO: handle longer names -->
      <h3 class="font-Jomhuria text-4xl text-white">
        <!-- {$current_event.start_date} | {$current_event.location} -->
        {$current_event.location}
      </h3>
    </div>
    <div class="flex space-x-4 justify-center">
      <!-- TODO: styling - check font, make height full, center bottom text -->
      <div>
        <h2 class="font-WorkSans text-8xl text-white flex-auto">
          {$current_event.carbon}
        </h2>
        <h3 class="font-WorkSans text-2xl text-white">kg of CO2</h3>
      </div>
      <div>
        <h2 class="font-WorkSans text-8xl text-white">
          {$current_event.score}/3
        </h2>
        <h3 class="font-WorkSans text-2xl text-white">Overall score</h3>
      </div>
    </div>
  </div>

  <div class="mx-10 py-4">
    <div
      class="flex flex-col space-y-2 md:flex-row md:justify-center md:space-x-4"
    >
      <!-- TODO: change for event_ids here -->
      <!-- TODO: disable buttons if user tries clicking when unauth -->

      <!-- TODO: check that event doesn't already have an organizer review -->
      <a href="/review_event_id/organizer">
        <button
          class="font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
          >Were you an organizer? Claim this event!</button
        >
      </a>

      <!-- TODO: check that att hasn't already reviewed this event -->
      <a href="/review_event_id/attendee">
        <button
          class="font-WorkSans  bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
          >Were you an attendee? Review this event!</button
        >
      </a>
    </div>

    <!-- TODO: styling - add indent to start of bullets, increase spacing inbetween bullets -->
    <div>
      <h3 class="text-center mt-6 font-Jomhuria text-4xl text-white">
        User Testimonials
      </h3>
      <ul class="text-gray-700 italic">
        <li>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. "
          </p>
        </li>
        <li>
          <p>
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
        </li>
        <li>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. "
          </p>
        </li>
      </ul>
    </div>
  </div>

  <div class="mx-10 py-4">
    <h2 class="text-center font-Jomhuria text-6xl text-white">
      Suggestions for improvement
    </h2>

    <h3 class="font-Jomhuria text-4xl text-white">Small changes:</h3>
    <ul class="text-gray-700 list-disc pl-6">
      <li>
        Distribute information electronically using QR codes instead of large
        paper pamphlets.
      </li>
      <li>
        Use biodegradable tableware or, even better, reusable tableware in
        smaller events.
      </li>
      <li>Donate untouched leftover food to local food banks.</li>
      <li>
        Encourage recycling and composting by keeping several recycle/composting
        cans available for guests. Keep these cans at high-traffic points; a
        composting bin at the door to a cafeteria after meals for food waste, a
        recycling bin at the exit for name tags, etc..
      </li>
      <li>
        If a significant number of guests are traveling from the same location,
        consider organizing some kind of bus transportation or carpool system.
      </li>
      <li>
        Opt for a large water jug and dispenser with cups instead of
        distributing small water bottles. Similarly, consider bulk snacks handed
        out sanitarily (muffins, trail mix/chips in cups, etc.) over
        individually packaged snack bags.
      </li>
    </ul>

    <h3 class="font-Jomhuria text-4xl text-white">Larger changes:</h3>
    <ul class="text-gray-700 list-disc pl-6">
      <li>
        Choose a local catering service with more sustainable practices, like
        using reusable serving containers, traveling less, and offering
        low-carbon menu options like less meat.
      </li>
      <li>
        Limit food waste or over-catering by surveying guests ahead of time for
        their preferences from your caterer’s menus.
      </li>
      <li>
        Consider shifting your marketing focuses to digital options or less
        carbon-intensive swag; choose stickers over t-shirts, etc. Remember,
        even giving away reusable water bottles or bags has a worse impact when
        most of your guests probably already have one such item to reuse.
      </li>
      <li>
        Choose an event location close to a community hub or transportation hubs
        (airports, bus/train stations, etc.) so guests have to commute less.
      </li>
      <li>
        Partner with event locations, caterers, and other businesses that work
        with sustainable habits and/or have some 3rd party sustainability
        certification (such as LEED, APEX/ASTM, Green Key, or Green Leaders)
      </li>
    </ul>
  </div>
</div>
