import React from 'react'
import { connect } from 'dva'
const flow = global.flow

function Header({ content, notSave }) {
    let style = {fontSize:'17px',color:'black',border:'none',backgroundColor:'white'}
    if(notSave){
        style = Object.assign({},style,{ backgroundColor:'#f1f6ff' })
    }
    return (
        <div style={{height:'100%',width:'100%',display:'flex',justifyContent:'flex-end',borderBottom: '0.5px solid #ccc'}}>
            <div style={{fontSize:'20px',fontFamily:'pingfang',margin:'auto 0',paddingRight:'20px'}}>Flow4.0</div>
        </div>
    )
}

function mapStateToProps(state) {
    const note = state.localData.notes[state.localData.index]
    if(note === undefined){
        return { content: '' }      
    }
    return { content: note[2], notSave: state.localData.notSave }
}

export default connect(mapStateToProps)(Header)
