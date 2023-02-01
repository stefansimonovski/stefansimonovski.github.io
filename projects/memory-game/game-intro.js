import { Game } from './game.js'
import * as jquery from './lib/jquery.js'

export function GameIntro(params) {
  $('#main-container').append(
    $('<div>')
      .addClass('win-div')
      .append($('<span>').html(params))
      .append(
        $('<select>')
          .attr('id', 'game-select')
          .append($('<option>').attr('value', 12).html('12'))
          .append($('<option>').attr('value', 16).html('16'))
          .append($('<option>').attr('value', 20).html('20'))
          .append($('<option>').attr('value', 24).html('24'))
      )
      .append(
        $('<button>')
          .html('Play Again!')
          .on('click', () => {
            this.$select = $('#game-select')
            var game = new Game(this.$select[0].value)
          })
      )
  )
}
