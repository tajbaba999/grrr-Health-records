import React from 'react'
import Patients from './Patients'
import TimeLine from './TimeLine'

const MainComp = (props) => {

    if(props.num == 0){
        return <TimeLine />
    }
    else if(props.num == 1){
        return <Patients />
    }
    return <TimeLine />
}

export default MainComp