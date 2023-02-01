import { GameLogic } from './game-logic.js'
import * as jquery from './lib/jquery.js'

export function Game(fields) {
  this.$mainContainer = $('#main-container')
  this.gameLogic = new GameLogic(fields)
  this.$gameHead = $('<div>')

  if (fields === '12') {
    this.$mainContainer.empty().removeClass().addClass('twelve-fields')
  } else if (fields === '16') {
    this.$mainContainer.empty().removeClass().addClass('sixteen-fields')
  } else if (fields === '20') {
    this.$mainContainer.empty().removeClass().addClass('twenty-fields')
  } else if (fields === '24') {
    this.$mainContainer.empty().removeClass().addClass('twentyfour-fields')
  }

  this.$gameHead
    .attr('id', 'game-head')
    .append(
      $('<span>').append(
        $('<div>')
          .addClass('timer')
          .html('Time: ' + this.gameLogic.timer)
      )
    )
    .append(
      $('<span>').append(
        $('<div>')
          .addClass('moves')
          .html('Flips: ' + this.gameLogic.flips)
      )
    )
    .prependTo(this.$mainContainer)

  this.gameLogic.startGame(fields)
}
