import { get, post } from '../services/header'
export default {
    namespace: 'header',
    state: {
        text: '',
        advance: false,
        hideNotes: false
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        },
        modeChange(state){
            return Object.assign({}, state, { advance: !state.advance } )
        },
        hsqChange(state){
            const { ...newstate } = state
            newstate.hideNotes = !state.hideNotes
            return newstate //Object.assign({}, state, { hideNotes: !state.hideNotes } )
        }
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
                    // dispatch({ type: 'getText' })
                }
            })
        }
    }
}

