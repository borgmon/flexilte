<script lang="ts">
	import { aiResultStore } from '$lib/AIStore';
	let currentMessage =
		'You are a AI chatbot that only response JSON. You are required to generate a json based on this example:`{"rows":[{"component":"TextBox","props":{"text":"My Website!","type":"h1"},"posX":"middle"},{"layoutClass":"md:my-12","cols":[{"component":"TextBox","props":{"text":"Hi! This is AI generated!","type":"h1"},"posX":"middle","posY":"middle"},{"component":"CodeBlock","props":{"language":"ts","code":"console.log(123)"},"posX":"middle","posY":"middle"},{"component":"ImageBox","props":{"url":"https://placedog.net/200/200"},"posX":"middle","posY":"middle"}]}]}` You have 3 components you can use: TextBox,CodeBlock,ImageBox. User: Please generate me a personal website';
	let model = 'gpt-4o';
	let apiKey = 'sk-';
	let url = 'https://api.openai.com/v1/chat/completions';

	async function getChatGPTResponse() {
		const data = {
			messages: [
				{
					role: 'user',
					content: currentMessage
				}
			],
			model: 'gpt-3.5-turbo',
			temperature: 1,
			presence_penalty: 0,
			top_p: 1,
			frequency_penalty: 0
		};

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify(data)
		});

		const result = await res.text();
		aiResultStore.set(result);
	}
</script>

<div class="input-group-divider rounded-container-token">
	<div class="m-4"></div>
	<label class="label">
		<span>Endpoint</span>
		<input class="input rounded-container-token" type="text" placeholder="Input" bind:value={url} />
	</label>
	<label class="label">
		<span>Model</span>
		<input
			class="input rounded-container-token"
			type="text"
			placeholder="Input"
			bind:value={model}
		/>
	</label>
	<label class="label">
		<span>API key (stored in browser)</span>
		<input
			class="input rounded-container-token"
			type="password"
			placeholder="Input"
			bind:value={apiKey}
		/>
	</label>
</div>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token mt-6">
	<button class="input-group-shim"></button>
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="7"
	/>
	<button class="variant-filled-primary" on:click={() => getChatGPTResponse()}>Send</button>
</div>
