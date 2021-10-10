export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            dafault: () => ([])
        }
    },
    emits: ['update:modelValue']
}
