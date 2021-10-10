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
    :key="field.title"
    v-model="field.value"
    :title="field.title"
    :items="field.items" />

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
          title: 'name!',
          value: ''
        },
        {
          component: 'SimpleRadio',
          title: 'age-range!',
          value: '',
          items: ['20대', '30대', '40대', '50대']
        }
      ]
    }
  }
}
</script>

