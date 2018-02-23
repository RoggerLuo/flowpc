import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import { Input } from 'antd'
const { TextArea } = Input

function Editor({content}) {
  return (
    <div style={{height:'100%',width:'100%',display:'flex'}}>
        <TextArea rows={4} style={{backgroundColor:'white',fontSize:'16px'}} placeholder="put text..." value={content}/>
    </div>
  );
}

function mapStateToProps(state) {
    return {content:state.edit.content}
}

export default connect(mapStateToProps)(Editor)

