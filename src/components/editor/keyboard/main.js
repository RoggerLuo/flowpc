import { moveUp, moveDown, moveLeft, moveRight } from './move/basic'
import { ultraUp, ultraDown, ultraLeft, ultraRight } from './move/ultra'
import { selectLeft, selectRight, selectUp, selectDown } from './select'
import { deleteLeft, deleteRight } from './delete'
import tab from './tab'
import wholeLine from './wholeLine'
import comma from './comma'

//move
const keyboard = {
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    ultraUp,
    ultraDown,
    ultraLeft,
    ultraRight,
    selectLeft,
    selectRight,
    selectUp,
    selectDown,
    deleteLeft,
    deleteRight,
    tab,
    comma,
    wholeLine
}

//select
keyboard.direction = 'left'
keyboard.direction2 = 'up'

//delete

keyboard.blur = (e) => {
    e.target.blur()
}

export default keyboard
