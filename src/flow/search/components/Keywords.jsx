import React from 'react'
import { connect } from 'dva'
import Words from './Words'

const isArray = (item) => item instanceof Array

function GroupsContainer({ result }) {
    if(!isArray(result)) throw result
    if(result.length === 0) return null

    const groups = []
    result.forEach(words => {
        words.forEach((el,ind) => {
            if(!groups[ind]){
                groups[ind] = []
            } 
            groups[ind].push(el.word)
        })
    })
         
    return (<Words groups={groups} />)
}

function mapStateToProps(state) {
    return { result: state.search.result }
}

export default connect(mapStateToProps)(GroupsContainer)

