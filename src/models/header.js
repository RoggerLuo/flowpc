import { get, post } from '../services/header'

export default {
    namespace: 'header',
    state: {
        text: '',
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
    },
    effects: {
        * postText({ text }, { call, put }) {
            yield call(post,text)    
        },
        * getText({ text }, { call, put }) {
            const value = yield call(get)
            yield put({ type: 'change', key: 'text', value })    
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname, query }) => {
                if (pathname === '/') {
                    dispatch({ type: 'getText' })
                }
            })
        }
    }
}

