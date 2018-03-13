import { moveUp, moveDown, moveLeft, moveRight } from './move/basic'
import { ultraUp, ultraDown, ultraLeft, ultraRight } from './move/ultra'
import { selectLeft, selectRight } from './select'
import { deleteLeft, deleteRight } from './delete'
import tab from './tab'
import wholeLine from './wholeLine'
import comma from './comma'

const keyboard = {}
//move
keyboard.moveUp = moveUp
keyboard.moveDown = moveDown
keyboard.moveLeft = moveLeft
keyboard.moveRight = moveRight
keyboard.ultraUp = ultraUp
keyboard.ultraDown = ultraDown
keyboard.ultraLeft = ultraLeft
keyboard.ultraRight = ultraRight

//select
keyboard.direction = 'left'
keyboard.selectLeft = selectLeft
keyboard.selectRight = selectRight 

//delete
keyboard.deleteLeft = deleteLeft
keyboard.deleteRight = deleteRight

keyboard.tab = tab
keyboard.comma = comma
keyboard.wholeLine = wholeLine
keyboard.blur = (e) => {
    e.target.blur()
}

export default keyboard
