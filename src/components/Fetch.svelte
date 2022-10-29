<script>
  // https://svelte.dev/repl/e7fc964f6a4f4ad0a731c3c1030fa671?version=3.44.0 #await block - fetch.then() with if
  // https://svelte.dev/repl/fdd5034d023146f49614d3b087515df5?version=3.52.0 await block example
  async function fetchData() {
    const res = await self.fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }
</script>

{#await fetchData()}
  <p>loading</p>
{:then items}
  {#each items as item}
    <li>{item.id}. {item.title}</li>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
