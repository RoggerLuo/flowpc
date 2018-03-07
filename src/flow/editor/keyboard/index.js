import { moveUp, moveDown, moveLeft, moveRight } from './move/basic'
import { ultraUp, ultraDown, ultraLeft, ultraRight } from './move/ultra'
import { selectLeft, selectRight } from './select'
import tab from './tab'
import wholeLine from './wholeLine'

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

keyboard.tab = tab
keyboard.wholeLine = wholeLine

export default keyboard
