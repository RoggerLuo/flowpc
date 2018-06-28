import React from 'react'
import s from './s.css'
import ironman from './ironman.png'
import tihu from './tihu.png'
// import tihuGrey from './tihu-grey.png'
// import hsqGrey from './hsq-grey.png'
import hsq from './hsq.png'
// import { connect } from 'dva'
function Header() {
    return (
        <div className={s.dragArea} style={{height:'100%',width:'100%',borderBottom: '0.5px solid #ccc',display:'flex',justifyContent: 'space-between'}}>
            <div style={{height:'100%',width:'45px',display:'flex'}}>
                <div style={{paddingLeft:'5px',cursor:'pointer'}} onClick={()=>{}}><img alt='hsq' src={hsq} style={{height:'100%'}}/></div>
            </div>
            <div style={{height:'100%',width:'40px',display:'flex'}}>
                <div style={{cursor:'pointer'}} onClick={()=>{}}><img alt='tihu' src={tihu} style={{height:'100%'}}/></div>
            </div>
            <div style={{paddingRight:'5px',cursor:'pointer'}} onClick={()=>{}}><img alt='ironman' src={ironman} style={{height:'100%'}}/></div>
        </div>
    )
}
export default Header 
//{ content, notSave }
//connect(mapStateToProps)(Header)
/*
function mapStateToProps(state) {
    return {  
        index2Locked: state.localData.index2Locked,
        advance:state.header.advance,
        hide:state.header.hideNotes,
    }
}
*/
// const clickIronMan = () => {
//     global.flow.dispatch({ type: 'header/modeChange' })
// }
// let imgSrc = tihuGrey
// const clickTihu = () => {
//     global.flow.dispatch({ type: 'localData/tihuChange' })
// }
// const clickHsq = () => {
//     global.flow.dispatch({ type: 'header/hsqChange' })
// }
// let imgHsq = hsqGrey
// if(hide){
//     imgHsq = hsq
// }
// if(index2Locked){
//     imgSrc = tihu
// }