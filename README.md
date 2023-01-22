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

We calculate this with knowing the carbon footprint of some of the items that are given out at spaces such as conventions, showcases, and hackathons. For each item, we researched their average footprint in terms of equivalent carbon dioxide used throughout its lifecycle, making necerssary assumptions along the way. Below are some examples of these calculations and the sources we used:

| Item  | Carbon Cost |Resource |
| ------------- |  ---- | ----- |
| A t-shirt  | C0.1 kg / unit |  [From The Smithsonian](https://www.smithsonianmag.com/innovation/whats-environmental-footprint-t-shirt-180962885/) |
| Cap  | 0.51kg/unit  |  [From Topiku](https://www.topiku.co/impact) |
| Sweater | 11.03kg/unit |  [From Ethical Consumer, assuming an everage shirt of 50%/50% cotton-polyester blend](https://www.ethicalconsumer.org/fashion-clothing/carbon-cost-clothing) |
| Stickers and Paper | 0.005kg/units | [A peer-reviewed paper, assuming mid-sized sticker sheet, two sheets of paper, plus a bit for glue](https://www.researchgate.net/figure/Carbon-footprint-of-office-paper_fig2_235712203)
| Plastic single-use cutlery | 0.003kg/units | [From Woodly](https://woodly.com/carbon_neutrality/what-is-the-carbon-footprint-of-plastic/) |
| Plates | 0.003 kg/unit | [From Plastic Footprint](https://plasticfootprint.ryanphung.com/)
| Single Use Containers | 1.7kg/unit | [From Woodly](https://woodly.com/carbon_neutrality/what-is-the-carbon-footprint-of-plastic/)

Additionally, we took into account the carbon footprint of excess food waste under different conditions:
| Menu Item  | Carbon Cost |Resource |
| ------------- |  ---- | ----- |
| Excess food | 0.941 kg / serving |  [From My Emissions Calculator](https://myemissions.green/food-carbon-footprint-calculator/ ) |
| Excess food composted  | 0.341 kg / serving  |  [From the San Jose Gov't](https://www.sanjoseca.gov/home/showpublisheddocument?id=198 ) |
| Excess vegetarian food | 0.244 kg / serving |  [From a peer reviewed paper]([https://www.ethicalconsumer.org/fashion-clothing/carbon-cost-clothing](https://pubmed.ncbi.nlm.nih.gov/18546681/) |

Please keep in mind that carbon emissions don't tell the whole story of the impact of an action - food waste worsens food insecurity, and unecessary small plastics are a danger to marine life. However, the purpose of this product is to summarize this impact to bring attention to all the daily choices that we take for granted.
