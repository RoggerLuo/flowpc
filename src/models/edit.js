import { notes_get } from '../services/notes'
import { routerRedux } from 'dva/router';

// const delay = timeout => new Promise(resolve => setTimeout(resolve,timeout))

export default {
    namespace: 'edit',
    state: {
        content: '',
        itemId:'',
        appKey:'',
        isLoading: false,
        showSuccessWord:false,
        settingModal:false
    },
    reducers: {
        change(state,{key,value}){
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)            
        },
        load(state,{content,itemId}){
            return Object.assign({}, state, {
                content: content,
                itemId:itemId
            })
        },
        openAppKeyModal(state,{appKey,showSuccessWord}) {
            return Object.assign({}, state, {
                appKeyModalVisible: true,
                appKey,
                showSuccessWord
            })
        },
        closeAppKeyModal(state) {
            return Object.assign({}, state, {
                appKeyModalVisible: false
            })
        },
        openModal(state) {
            return Object.assign({}, state, {
                modalVisible: true
            })
        },
        closeModal(state) {
            return Object.assign({}, state, {
                modalVisible: false
            })
        },
        loading(state) {
            return Object.assign({}, state, {
                isLoading: true
            })
        },
        stopLoading(state) {
            return Object.assign({}, state, {
                isLoading: false
            })
        }
    },
    effects: { 
        * mimicAjax({query},{call,put}){
            yield put({type:'change',key:'isLoading',value:true})
            // yield call(delay,300)
            yield put({type:'change',key:'isLoading',value:false})
            // if() query.visitor = true
            yield put(routerRedux.push({
              pathname: '/app-detail',
              query
            }))
        },
        // * deleteApp({appId}, { call, put }) {
        //     const listArr = yield call(deleteReq,appId)
        //       刷新列表 
        //     yield put({ type: 'getAppList' })
        //     yield put(routerRedux.push({pathname: '/app-list'}))
        // },
        * createApp({ payload }, { call, put }) {
            // const res = yield call(create, payload)
            // yield put({ type: 'closeModal' })
            // yield put({ type: 'stopLoading' })
            // /* 弹出modal appKey 成功 */
            // // yield put({ type: 'openAppKeyModal', showSuccessWord:true, appKey:res.appKey})
            // /*  刷新列表 */
            yield put({ type: 'getAppList' })
        },

        * getNotes({placeholder}, { call, put }) {
            const notes = yield call(notes_get)
            yield put({ type: 'change', key:'notes', value:notes })
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname,query }) => {
                if (pathname === '/') {
                    dispatch({type: 'getNotes'})
                }
            })
        },
    }
}
