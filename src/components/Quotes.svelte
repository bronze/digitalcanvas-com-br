<script>
import Quote from "./Quote.svelte"
let gettingQuotes = getQuotes()

async function getQuotes() {
  const response = await fetch("./quotes.json")
  const data = await response.json()

  if(response.ok) {
    return data
  }
  else {
    throw new Error(data)
  }
}
</script>

<section>
  {#await gettingQuotes}
  <blockquote>
    <p id="quote">
      If you don’t know where you’re going, any road will take you there
    </p>
  </blockquote>
  <p id="author">Lewis Carroll</p>
  {:then quotes}
  <Quote {quotes}/>
  {:catch error}
  <p>{error.message}</p>
  {/await}
</section>
