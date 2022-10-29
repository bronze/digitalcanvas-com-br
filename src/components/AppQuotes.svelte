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
      You can't go back and change the beggining, but you can start where you are and change
      the ending
    </p>
  </blockquote>
  <p id="author">C. S. Lewis</p>
  {:then quotes}
  <Quote {quotes}/>
  {:catch error}
  <p>{error.message}</p>
  {/await}
</section>
