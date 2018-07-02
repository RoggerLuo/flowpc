import { Model } from 'dva'
import {moveup, movedown} from './move'
// import { _, meta, ctrl } from './config' //shift
// const flow = global.flow
export default function({keyMap,meta,ctrl,shift},catcher) { 
    /* 文章列表操作 */
    //移动
    catcher(keyMap.i, {ctrl},  moveup) 
    catcher(keyMap.k, {ctrl}, movedown) 

    catcher(keyMap.i, {meta},  moveup) 
    catcher(keyMap.k, {meta}, movedown) 

    // catcher(keyMap.up, {meta}, moveup) 
    // catcher(keyMap.down, {meta}, movedown) 
    //新建 保存 删除
    catcher(keyMap.n, {ctrl} , ()=>Model.dispatch({type:'editor/create'})) 
    catcher(keyMap.s, {meta}, ()=>Model.dispatch({type:'editor/saveNote'}))
    catcher(keyMap.d, {meta}, ()=>Model.dispatch({type:'editor/delete'})) 
}
