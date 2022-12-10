import './styles.css'
import { ContextMenu } from './menu.js'
import { ReactionGame } from './modules/reaction.module'

const array = [new BackgroundModule()]

const contextMenu = new ContextMenu('#menu')

contextMenu.add(new ReactionGame('reaction',"Игра на реакцию"))