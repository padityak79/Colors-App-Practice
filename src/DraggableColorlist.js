import React from 'react'
import DragColorBox from './DragColorBox.js'
import {SortableContainer} from 'react-sortable-hoc';

const DraggableColorlist = SortableContainer(({colors,removeColorBox}) => {
    return (
        <div style={{height : "100%"}}>
            {colors.map( (color , i) => <DragColorBox 
            index={i}
            color={color.color} 
            key={color.name} 
            name={color.name} 
            removeColorBox={() => removeColorBox(color.name)}/>)
            }
        </div>
    )
})

export default DraggableColorlist