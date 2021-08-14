import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'

const TooltipWrapper = (props) => {
    return (
        <div>
           {props.type === "password" ? 
            <Tooltip title="You are about to type your password">{props.element}</Tooltip> :
            <Tooltip title="You are about to type sensitive information">{props.element}</Tooltip>} 
        </div>
    )
}

export default TooltipWrapper
