import { Game } from './game.js'
import * as jquery from './lib/jquery.js'

function main() {
  $(document).ready(function () {
    this.$mainContainer = $('#main-container')
    this.$select = $('#select-game')
    this.$mainContainer.on('click', '#start-game', event => {
      event.preventDefault()
      this.game = new Game(this.$select[0].value)
    })
  })
}
main()
