import addSub from './views/add_sub.svelte'
import res from './views/res.svelte'

export default {
    '/': addSub,
    '/:resultString': res
}
