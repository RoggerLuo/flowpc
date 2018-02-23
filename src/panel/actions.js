export function clickNote(itemId, content) {
    const dis = global.app._store.dispatch
    dis({ type: 'edit/load', itemId, content })
}

//数据唯一的存在data，edit只是操作
export function save() {
    const dis = global.app._store.dispatch
    dis({ type: 'edit/save' })
    console.log('save...')
}

export function _new() {
    const dis = global.app._store.dispatch
    dis({ type: 'edit/_new' })
}

export function del(){
    const dis = global.app._store.dispatch
    dis({ type: 'edit/del' })
}