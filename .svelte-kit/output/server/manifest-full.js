export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/girl_holding.png","assets/logo.png","assets/metal.png","assets/recycle_1.png","assets/recycle_2.png","assets/world.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-6367f502.js","imports":["_app/immutable/start-6367f502.js","_app/immutable/chunks/index-c9c3e0a4.js","_app/immutable/chunks/singletons-7fd09b75.js","_app/immutable/chunks/index-152aec2f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/add_event",
				pattern: /^\/add_event\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/add_event/attendee",
				pattern: /^\/add_event\/attendee\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/add_event/organizer",
				pattern: /^\/add_event\/organizer\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/how_it_works",
				pattern: /^\/how_it_works\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[event_id]_info_page",
				pattern: /^\/([^/]+?)_info_page\/?$/,
				params: [{"name":"event_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
