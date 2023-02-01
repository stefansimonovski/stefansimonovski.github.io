export function AudioControler() {
  this.flipSoundSrc = './audio/card-flip.mp3'
  this.missSoundSrc = './audio/miss.mp3'
  this.matchSoundSrc = './audio/match.mp3'
  this.winSoundSrc = './audio/win.mp3'
  this.loseSoundSrc = './audio/game-over.mp3'

  $('#main-container').append(
    $('<audio>')
      .attr('id', 'audio')
      .append(
        $('<source>')
          .attr('id', 'sound')
          .attr('src', '')
          .attr('type', 'audio/wav')
      )
  )
  this.chooseSound = function (param) {
    if (param === 'flip') {
      $('#sound').attr('src', this.flipSoundSrc)
      this.playSound()
    } else if (param === 'miss') {
      $('#sound').attr('src', this.missSoundSrc)
      this.playSound()
    } else if (param === 'match') {
      $('#sound').attr('src', this.matchSoundSrc)
      this.playSound()
    } else if (param === 'win') {
      $('#sound').attr('src', this.winSoundSrc)
      this.playSound()
    } else if (param === 'lose') {
      $('#sound').attr('src', this.loseSoundSrc)
      this.playSound()
    }
  }

  this.playSound = function () {
    $('#audio').trigger('load').trigger('play')
  }
}
