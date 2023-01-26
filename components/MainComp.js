import React from 'react'
import FindPatient from './FindPatient'
import Patients from './Patients'
import TimeLine from './TimeLine'

const MainComp = (props) => {

    if(props.num == 0){
        return <TimeLine />
    }
    else if(props.num == 1){
        return <Patients />
    }
    else if(props.num == 2){
        return <FindPatient />
    }
    return <TimeLine />
}

export default MainComp