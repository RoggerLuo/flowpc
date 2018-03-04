import {moveup, movedown} from '../move'
import { _, meta, ctrl } from './config' //shift
const flow = global.flow
export default function(catcher) { 
    /* 文章列表操作 */
    //移动
    catcher(_.i, {ctrl},  moveup) 
    catcher(_.up, {meta}, moveup) 
    catcher(_.down, {meta}, movedown) 
    catcher(_.k, {ctrl}, movedown) 
    //新建 保存 删除
    catcher(_.n, {ctrl} , flow.notes.create) 
    catcher(_.s, {meta}, flow.editor.serverSave)
    catcher(_.d, {meta}, flow.notes.delete) 
}
