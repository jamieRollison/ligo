<p align="center">
<img width="100px" src="https://user-images.githubusercontent.com/65576812/213904448-5f55109c-2490-48a8-9eb4-3ca78350b3b2.png" />
</p>
<h1 align="center"> LIGO</h1>

### The Problem 
Currently, there is no way for events at a large scale such as conventions, premieres, events, and even hackathons to track their carbon footprint. However, by measuring the number of plastics, waste, and sustainable options they have, we can understand their impact. Therefore, we have created [Ligo](https://ligoismore.tech), a tool to track an event and its attendees' carbon footprint.

### Tech Stack
- [SvelteKit](https://svelte.dev/blog/announcing-sveltekit-1.0) - A vite plugin, and framework that runs anywhere JS runs 
- MongoDB
- TailwindCSS

### How it works
A user is able to select an event they organized or attended, answer a few questions on a form about waste production, and contribute the crowdsourced score of how envrionmentally concious the event was. 

We calculate this with knowing the carbon footprint of some of the items that are given out at spaces such as conventions, showcases, and hackathons.

| Item  | Carbon Cost | Water Cost | Resource |
| ------------- | ------------ | ---- | ----- |
| A t-shirt  | C0.1 kg / unit | 120 li/use | [Link](https://www.smithsonianmag.com/innovation/whats-environmental-footprint-t-shirt-180962885/) |
| Cap  | 0.51kg/unit  | ... | [Link](https://www.topiku.co/impact) |
| Sweater | 11.03kg/unit | ... | [assuming 50% cotton, 50% polyester, 0.45 kg weight, like this common reprinted model](https://www.ethicalconsumer.org/fashion-clothing/carbon-cost-clothing) |
| Stickers and Paper | 0.005kg/units | ... | [assuming mid-sized sticker sheet, two sheets of paper, plus a bit for glue](https://www.researchgate.net/figure/Carbon-footprint-of-office-paper_fig2_235712203)
| Plastic single-use cutlery | 0.003kg/units | ... | [Link](https://woodly.com/carbon_neutrality/what-is-the-carbon-footprint-of-plastic/) |
| Plates | 0.003 kg/unit | ... | [Link](https://plasticfootprint.ryanphung.com/)
| Single Use Containers | 1.7kg/unit | ... | [Link](https://woodly.com/carbon_neutrality/what-is-the-carbon-footprint-of-plastic/)

