<template>
  <h1>SURVEY</h1>
  <!-- <TextField
    v-model="fields[0].value"
    :title="fields[0].title" />
  <SimpleRadio
    v-model="fields[1].value"
    :title="fields[1].title"
    :items="fields[1].items" /> -->
  <component
    :is="field.component"
    v-for="field in fields"
    :key="'component-' + field.title"
    v-model="field.value"
    :title="field.title"
    :items="field.items" />

  <h1>RESULT</h1>
  <div
    v-for="field in fields"
    :key="'result-' + field.title">
    {{ field.value }}
  </div>
  <button @click="submit">
    SUBMIT!
  </button>
</template>

<script>
import * as FieldComponents from '~/components/fields/index.js'
export default {
  components: {
    ...FieldComponents
  },
  data() {
    return {
      fields: [
        {
          component: 'TextField',
          title: 'name!',
          value: ''
        },
        {
          component: 'SimpleRadio',
          title: 'age-range!',
          value: '',
          items: ['20-ages', '30-ages', '40-ages', '50-ages']
        }
      ]
    }
  },
  methods: {
    submit() {
      const results = this.fields.map((field) => {
        return {
          title: field.title,
          value: field.value
        }
      })
      console.log(results)
    }
  }
}
</script>

