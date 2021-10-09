<template>
  <h1>SURVEY</h1>
  <TextField
    v-model="fields[0].value"
    :title="fields[0].title" />
  <SimpleRadio
    v-model="fields[1].value"
    :title="fields[1].title"
    :items="fields[1].items" />

  <h1>RESULT</h1>
  <div
    v-for="field in fields"
    :key="field.title">
    {{ field.value }}
  </div>
</template>

<script>
import TextField from '~/components/fields/TextFields'
import SimpleRadio from '~/components/fields/SimpleRadio'

export default {
  components: {
    TextField,
    SimpleRadio,
  },
  data() {
    return {
      fields: [
        {
          component: 'TextField',
          title: 'name',
          value: ''
        },
        {
          component: 'SimpleRadio',
          title: 'age-range',
          value: '',
          items: ['20-ages', '30-ages', '40-ages', '50-ages']
        }
      ]
    }
  }
}
</script>

