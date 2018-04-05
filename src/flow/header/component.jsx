import React from 'react'
import s from './s.css'
import ironman from './ironman.png'
import tihu from './tihu.png'
import tihuGrey from './tihu-grey.png'
import { connect } from 'dva'

function Header({ content, notSave, index2Locked, advance }) {

    const click = () => global.flow.dispatch({type:'localData/sortByTime'})
    const clickIronMan = () => {
        global.flow.dispatch({ type: 'header/modeChange' })
    }
    // const blur = (e) => {
    //     global.flow.dispatch({type:'header/postText',text:e.target.innerText})
    // }
    let imgSrc = tihuGrey
    const clickTihu = () => {
        global.flow.dispatch({ type: 'localData/tihuChange' })
    }
    if(index2Locked){
        imgSrc = tihu
    }
    return (
        <div className={s.dragArea} style={{height:'100%',width:'100%',borderBottom: '0.5px solid #ccc',display:'flex'}}>
            <div style={{height:'100%',width:'90%',display:'flex',padding:'0 8px'}}>
                {advance?(<div style={{paddingLeft:'30px',cursor:'pointer'}} onClick={clickTihu}><img alt='tihu' src={imgSrc} style={{height:'100%'}}/></div>):null}
            </div>
            <div style={{width:'10%',fontSize:'20px',fontFamily:'pingfang',textAlign:'right',margin:'auto 0'}}>Flow4.0</div>
            <div style={{paddingRight:'15px',cursor:'pointer'}} onClick={clickIronMan}><img alt='ironman' src={ironman} style={{height:'100%'}}/></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {  
        index2Locked: state.localData.index2Locked,
        advance:state.header.advance,
    }
}

export default connect(mapStateToProps)(Header)
/*
<div onClick={click} style={{cursor:'pointer',borderRadius: '4px',height:'70%',color:'#CCC',margin:'auto 8px',display:'flex'}}> 
    <div style={{margin:'auto 0'}}>&nbsp;SortByTime&nbsp; </div>
</div>
*/

/*
<div style={{cursor:'pointer',borderRadius: '4px',height:'70%',color:'#CCC',margin:'auto 8px',display:'flex'}}> 
    <div id="customized-header-text" onBlur={blur} contentEditable="true" style={{outline:'none',backgroundColor:'white',minWidth:'600px',margin:'auto 0'}}></div>
</div>
*/
