import React from 'react'
import s from './s.css'
import ironman from './ironman.png'
import tihu from './tihu.png'
import tihuGrey from './tihu-grey.png'
import hsqGrey from './hsq-grey.png'
import hsq from './hsq.png'
import { connect } from 'dva'
function Header({ content, notSave, index2Locked, advance, hide }) {
    const clickIronMan = () => {
        global.flow.dispatch({ type: 'header/modeChange' })
    }
    let imgSrc = tihuGrey
    const clickTihu = () => {
        global.flow.dispatch({ type: 'localData/tihuChange' })
    }
    const clickHsq = () => {
        global.flow.dispatch({ type: 'header/hsqChange' })
    }
    let imgHsq = hsqGrey
    if(hide){
        imgHsq = hsq
    }
    if(index2Locked){
        imgSrc = tihu
    }
    return (
        <div className={s.dragArea} style={{height:'100%',width:'100%',borderBottom: '0.5px solid #ccc',display:'flex',justifyContent: 'space-between'}}>
            <div style={{height:'100%',width:'45px',display:'flex'}}>
                <div style={{paddingLeft:'5px',cursor:'pointer'}} onClick={clickHsq}><img alt='hsq' src={imgHsq} style={{height:'100%'}}/></div>
            </div>

            <div style={{height:'100%',width:'40px',display:'flex'}}>
                {advance?(<div style={{cursor:'pointer'}} onClick={clickTihu}><img alt='tihu' src={imgSrc} style={{height:'100%'}}/></div>):null}
            </div>
            <div style={{paddingRight:'5px',cursor:'pointer'}} onClick={clickIronMan}><img alt='ironman' src={ironman} style={{height:'100%'}}/></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {  
        index2Locked: state.localData.index2Locked,
        advance:state.header.advance,
        hide:state.header.hideNotes,
    }
}

export default connect(mapStateToProps)(Header)
/*
<div style={{width:'10%',fontSize:'20px',fontFamily:'pingfang',textAlign:'right',margin:'auto 0'}}>Flow4.0</div>
*/
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
// const blur = (e) => {
//     global.flow.dispatch({type:'header/postText',text:e.target.innerText})
// }
// const click = () => global.flow.dispatch({type:'localData/sortByTime'})
