// import { _, meta, ctrl, shift } from './config'
import kb from './main'
export default function({keyMap,meta,ctrl,shift},catcher) { 
    /* editor操作 */
    
    // 上下左右
    catcher(keyMap.i, {meta}, kb.moveUp) 
    catcher(keyMap.k, {meta}, kb.moveDown) 
    catcher(keyMap.j, {meta}, kb.moveLeft) 
    catcher(keyMap.o, {meta}, kb.moveRight) 
    // super上下左右
    catcher(keyMap.i, {meta,ctrl}, kb.ultraUp) 
    catcher(keyMap.k, {meta,ctrl}, kb.ultraDown) 
    catcher(keyMap.j, {meta,ctrl}, kb.ultraLeft) 
    catcher(keyMap.o, {meta,ctrl}, kb.ultraRight) 

    //删除文字
    catcher(keyMap.j, {ctrl}, kb.deleteLeft) 
    catcher(keyMap.o, {ctrl}, kb.deleteRight) 

    //选中
    catcher(keyMap.j, {meta,shift}, kb.selectLeft)
    catcher(keyMap.o, {meta,shift}, kb.selectRight)
    catcher(keyMap.a, {meta}, kb.wholeLine)
    catcher(keyMap.i, {meta,shift}, kb.selectUp)
    catcher(keyMap.k, {meta,shift}, kb.selectDown)
    
    //tab
    catcher(keyMap.tab, {}, kb.tab) 
    //blur
    catcher(keyMap.esc,{},kb.blur)
    //dot
    catcher(keyMap.h, {meta}, kb.comma) 
}
