export default {
    install(app, options) {
        app.config.globalProperties.$fetch = (url, opts) => {
            return fetch(url, opts).then(res => res.json())
        }
        // fetch(url, option).then(res => res.json()).then(res => console.log(res))
    }
}
