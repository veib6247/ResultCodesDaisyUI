<script setup>
  import { reactive, onMounted } from 'vue'
  // the one variable to rule them all
  const result = reactive({
    url: 'https://eu-test.oppwa.com/v1/resultcodes',
    data: '',
    error: false,
  })
  // fetch the list from oppwa's API
  async function fetchList() {
    // reset state
    result.error = false
    try {
      // fetch!
      const rawResults = await fetch(result.url, {
        method: 'GET',
      })
      // parse
      result.data = await rawResults.json()
    } catch (error) {
      // update state to display error notif, also display to console
      result.error = true
      console.error('Uh oh, stinky...', error)
    }
  }
  // on app component mounted, run the function
  onMounted(() => {
    fetchList()
  })
</script>

<template>
  <Transition>
    <div class="overflow-x-auto" v-if="result.data">
      <table class="table table-zebra w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in result.data.resultCodes" class="hover">
            <td>{{ result.code }}</td>
            <td>{{ result.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Transition>
</template>
