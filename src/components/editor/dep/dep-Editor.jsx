import React from 'react'
import { connect, Model } from 'dva'
import model from './model'
Model.create(model)

// import Wrap from './Wrap'
import Textarea from './Textarea'
function Editor({ content, notSave }){
    return (
        <Wrap notSave={notSave} >
            <Textarea />
        </Wrap>
    )
}
export default connect(state=>state.editor)(Editor)