import React from 'react'
import s from './s.css'

export default function({ content, notSave }) {
    const click = () => global.flow.dispatch({type:'localData/sortByTime'})
    const blur = (e) => {
        global.flow.dispatch({type:'header/postText',text:e.target.innerText})
    }
    return (
        <div className={s.dragArea} style={{height:'100%',width:'100%',borderBottom: '0.5px solid #ccc',display:'flex'}}>
            <div style={{height:'100%',width:'90%',display:'flex',padding:'0 8px'}}>
                
                <div onClick={click} style={{cursor:'pointer',borderRadius: '4px',height:'70%',color:'#CCC',margin:'auto 8px',display:'flex'}}> 
                    <div style={{margin:'auto 0'}}>&nbsp;SortByTime&nbsp; </div>
                </div>

                <div style={{cursor:'pointer',borderRadius: '4px',height:'70%',color:'#CCC',margin:'auto 8px',display:'flex'}}> 
                    <div id="customized-header-text" onBlur={blur} contentEditable="true" style={{outline:'none',backgroundColor:'white',minWidth:'600px',margin:'auto 0'}}></div>
                </div>
            </div>
            <div style={{width:'10%',fontSize:'20px',fontFamily:'pingfang',textAlign:'right',margin:'auto 0',paddingRight:'20px'}}>Flow4.0</div>
        </div>
    )
}
