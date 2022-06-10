<template>
  <div>
    <p>{{ fetchResponse.userId }}</p>
    <p>{{ fetchResponse.id }}</p>
    <p>{{ fetchResponse.title }}</p>
    <p>{{ fetchResponse.complete }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  asyncData: async ({ app, params }) => {
    const slug = typeof params.slug === 'undefined' ? '1' : params.slug

    let fetchResponse: any
    await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`)
      .then(async (res) => {
        fetchResponse = await res.json()
      })
      .catch((err) => {
        console.log(err)
      })

    return {
      fetchResponse,
    }
  },
})
</script>
