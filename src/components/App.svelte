<script>
  import data from './sveltequotes.json';

  import { fade } from 'svelte/transition';
  let options = { duration: 400 };

  export let quotes = data;
  let quote = getRandomQuote(quotes);

  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function updateQuote() {
    quote = getRandomQuote(quotes);
  }
</script>
<section>
  {#key quote}
    <blockquote>
      <div in:fade={options}>
        <p id="quote">{quote.quote}</p>
      </div>
    </blockquote>
    <p id="author">{quote.author}</p>
  {/key}
</section>

<style>

</style>
