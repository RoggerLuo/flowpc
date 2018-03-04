import { _, meta, ctrl, shift } from './config'
const flow = global.flow
export default function(catcher) { 
    /* editor操作 */
    // 上下左右
    catcher(_.i, {meta}, flow.editor.previousLine) 
    catcher(_.k, {meta}, flow.editor.nextLine) 
    catcher(_.j, {meta}, flow.editor.moveLeft) 
    catcher(_.o, {meta}, flow.editor.moveRight) 
    //删除文字
    catcher(_.j, {ctrl}, flow.editor.deleteLeft) 
    catcher(_.o, {ctrl}, flow.editor.deleteRight) 
    //选中
    catcher(_.k, {meta,shift}, flow.editor.selectLeft)
    catcher(_.o, {meta,shift}, flow.editor.selectRight)
    catcher(_.a, {meta}, flow.editor.wholeLine)
    //tab
    catcher(_.tab, {}, flow.editor.tab) 
}
