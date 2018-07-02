import { _, meta, ctrl, shift } from './config'
const kb = global.flow.editor.keyboard
export default function(catcher) { 
    /* editor操作 */
    
    // 上下左右
    catcher(_.i, {meta}, kb.moveUp) 
    catcher(_.k, {meta}, kb.moveDown) 
    catcher(_.j, {meta}, kb.moveLeft) 
    catcher(_.o, {meta}, kb.moveRight) 
    // super上下左右
    catcher(_.i, {meta,ctrl}, kb.ultraUp) 
    catcher(_.k, {meta,ctrl}, kb.ultraDown) 
    catcher(_.j, {meta,ctrl}, kb.ultraLeft) 
    catcher(_.o, {meta,ctrl}, kb.ultraRight) 

    //删除文字
    catcher(_.j, {ctrl}, kb.deleteLeft) 
    catcher(_.o, {ctrl}, kb.deleteRight) 

    //选中
    catcher(_.j, {meta,shift}, kb.selectLeft)
    catcher(_.o, {meta,shift}, kb.selectRight)
    catcher(_.a, {meta}, kb.wholeLine)
    catcher(_.i, {meta,shift}, kb.selectUp)
    catcher(_.k, {meta,shift}, kb.selectDown)
    
    //tab
    catcher(_.tab, {}, kb.tab) 
    //blur
    catcher(_.esc,{},kb.blur)
    //dot
    catcher(_.h, {meta}, kb.comma) 

}
