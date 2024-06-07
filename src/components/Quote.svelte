<script>
import { fade } from 'svelte/transition';
let options = { duration: 2000 };
export let quotes=[]

let quote = getRandomQuote(getRandomQuote)

function getRandomQuote(quotes){
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function updateQuote() {
  quote = getRandomQuote(quotes)
}

function postToTwitter() {
  window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
}
</script>

<style>

</style>

<blockquote>
<p id="quote">{quote.quoteText}</p>
</blockquote>
<p id="author">{quote.quoteAuthor}</p>
<!-- <div class="box">
  <div class="buttons">
    <button
      class="button"
      on:click={updateQuote}
      type="submit">
      <span class="icon"><i class="fas fa-redo"></i></span>
      <span>Generate Quote</span>
    </button>
    <button
    on:click={postToTwitter}
    class="button">
      <span class="icon"><i class="fab fa-twitter"></i></span>
      <span>Share Quote</span>
    </button>
  </div>
</div> -->
