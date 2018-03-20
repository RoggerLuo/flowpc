import { _, meta,ctrl } from './config' // shift
export default function(catcher) { 
    // ordering
    catcher(_.t,{ctrl},()=>{

        if(global.flow.notSave){
            global.flow.editor.serverSave()
            return
        }

        global.flow.dispatch({ type: 'localData/sortByTime' })
    })

    // 搜索框
    catcher(_.f, {meta}, global.flow.search.toggle) 
    
    // nw 隐藏界面
    catcher(_.w, {meta}, function(){
        if(global.nw){
            const win = global.nw.Window.get();
            win.hide()                    
        }
    })
    
    // 搜索、编辑器获得焦点
    catcher(_.enter,{meta}, function(){
        if(global.app._store.getState().search.visibility){
            global.flow.dispatch({ type: 'search/request' })
            global.flow.dispatch({ type: 'search/toggle' })
        }else{
            global.flow.utils.editorFocus()            
        }
    })    
}
