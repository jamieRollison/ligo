<script>
	import { page } from '$app/stores';
	console.log($page.params);
</script>

<div class="divide-y">
	<div class="flex flex-col space-y-4 md:space-y-2 md:flex-row mx-10 py-4 md:justify-between">
		<div>
			<h1 class="font-Jomhuria text-8xl text-white">WWDC</h1>
			<!-- TODO: handle longer names -->
			<h3 class="font-Jomhuria text-4xl text-white">December 20, 2018 | California</h3>
		</div>
		<div class="flex space-x-4 justify-center">
			<!-- TODO: styling - check font, make height full, center bottom text -->
			<div>
				<h2 class="font-WorkSans text-8xl text-white flex-auto">100</h2>
				<h3 class="font-WorkSans text-2xl text-white">Tons of CO2</h3>
			</div>
			<div>
				<h2 class="font-WorkSans text-8xl text-white">3/5</h2>
				<h3 class="font-WorkSans text-2xl text-white">Overall score</h3>
			</div>
		</div>
	</div>

	<div class="mx-10 py-4">
		<div class="flex flex-col space-y-2 md:flex-row md:justify-center md:space-x-4">
			<button
				class="font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
				>Were you an organizer? Claim this event!</button
			>
			<button
				class="font-WorkSans  bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
				>Were you an attendee? Review this event!</button
			>
		</div>

        <!-- TODO: styling - add indent to start of bullets, increase spacing inbetween bullets -->
		<div>
			<h3 class="text-center mt-6 font-Jomhuria text-4xl text-white">User Testimonials</h3>
			<ul class="text-gray-700 italic">
				<li>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					</p>
				</li>
				<li>
					<p>
						"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum."
					</p>
				</li>
				<li>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
					</p>
				</li>
			</ul>
		</div>
	</div>

    <div class="mx-10 py-4">
        <h2 class="text-center font-Jomhuria text-6xl text-white">Suggestions for improvement</h2>

        <ul class="text-gray-700 list-disc pl-6">
            <li>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                </p>
            </li>
            <li>
                <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum."
                </p>
            </li>
            <li>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                </p>
            </li>
        </ul>
    </div>
</div>
