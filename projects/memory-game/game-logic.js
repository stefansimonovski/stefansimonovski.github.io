import { GenerateImages } from './generate-images.js'
import { GameIntro } from './game-intro.js'
import { AudioControler } from './audio-controler.js'
import { HelpButton } from './help-button.js'
import * as jquery from './lib/jquery.js'

export function GameLogic(fields) {
  this.moves = 0
  this.match1 = ''
  this.match2 = ''
  this.timer = fields * 5
  this.flips = 0
  this.checkMatch = () => {
    if (this.match1 === this.match2) {
      this.match()
    } else {
      this.reset()
    }
  }
  this.reset = () => {
    this.audioControler.chooseSound('miss')
    this.moves = 0
    this.match1 = ''
    this.match2 = ''
    this.clicked = Array.from($('.clicked'))
    this.clicked.forEach(element => {
      setTimeout(element.classList.remove('clicked'), 1000)
    })
    this.selected = Array.from($('.selected'))
    this.selected.forEach(element => {
      element.classList.remove('selected')
    })
    this.notMatch = Array.from($('.not-match-clicked'))
    this.notMatch.forEach(element => {
      element.classList.remove('not-match-clicked')
    })
  }
  this.match = function () {
    this.audioControler.chooseSound('match')
    this.moves = 0
    this.match1 = ''
    this.match2 = ''
    this.clicked = Array.from($('.clicked'))
    this.clicked.forEach(element => {
      element.classList.remove('clicked')
    })
    this.selected = Array.from($('.selected'))
    this.selected.forEach(element => {
      element.classList.remove('selected')
      element.classList.add('match')
    })
    this.notMatch = Array.from($('.not-match-clicked'))
    this.notMatch.forEach(element => {
      element.classList.remove('not-match')
    })
    this.checkWin()
  }
  this.startCountdown = setInterval(() => {
    this.timer--
    $('.timer').html('Time: ' + this.timer)
    this.checkLose()
  }, 1000)
  this.stopCountdown = function () {
    clearInterval(this.startCountdown)
  }
  this.checkWin = function () {
    this.matched = $('.match')
    if (this.matched.length / 2 === Number(fields)) {
      this.audioControler.chooseSound('win')
      var game = new GameIntro('YOU WIN!')
      this.stopCountdown()
    }
  }
  this.checkLose = function () {
    if (this.timer <= 0) {
      this.audioControler.chooseSound('lose')
      var game = new GameIntro('YOU LOSE!')
      this.stopCountdown()
    } else if (this.timer <= 10) {
      $('.timer').addClass('timer-red')
      setTimeout(() => {
        $('.timer').html('')
      }, 250)
      setTimeout(() => {
        $('.timer').html('Time: ' + this.timer)
      }, 500)
      setTimeout(() => {
        $('.timer').html('')
      }, 750)
    }
  }
  this.startGame = function (fields) {
    this.images = new GenerateImages(fields)
    this.audioControler = new AudioControler()
    this.helpButton = new HelpButton()
    this.$mainContainer = $('#main-container')
    for (var i = 0; i < this.images.imagesArray.length; i++) {
      $('<div>')
        .addClass('main-field')
        .append(
          $('<div>')
            .addClass('field-back')
            .append(
              $('<img>')
                .attr('src', './img/card-back.png')
                .addClass('card-back')
            )
        )
        .append(
          $('<span>')
            .addClass('field-front')
            .append(
              $('<img>')
                .addClass('not-match')
                .attr('id', this.images.imagesArray[i].name)
                .attr('src', this.images.imagesArray[i].src)
            )
        )
        .appendTo(this.$mainContainer)
        .on('click', event => {
          var clicked = event.target
          if (clicked.classList.contains('card-back')) {
            this.moves++
            if (this.moves === 1) {
              this.audioControler.chooseSound('flip')
              this.flips++
              $('.moves').html('Flips: ' + this.flips)
              this.match1 = event.target.parentNode.nextSibling.firstChild.id
            } else if (this.moves === 2) {
              this.audioControler.chooseSound('flip')
              this.match2 = event.target.parentNode.nextSibling.firstChild.id
              setTimeout(this.checkMatch, 1000)
            } else {
              return
            }
            event.target.parentNode.parentNode.classList.add('clicked')
            event.target.parentNode.classList.add('selected')
            event.target.parentNode.nextSibling.classList.add('selected')
            event.target.parentNode.nextSibling.firstChild.classList.add(
              'not-match-clicked'
            )
          } else {
            return
          }
        })
    }
  }
}
