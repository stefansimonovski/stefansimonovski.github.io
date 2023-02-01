import { Image1 } from './images.js'
import { Image2 } from './images.js'
import { Image3 } from './images.js'
import { Image4 } from './images.js'
import { Image5 } from './images.js'
import { Image6 } from './images.js'
import { Image7 } from './images.js'
import { Image8 } from './images.js'
import { Image9 } from './images.js'
import { Image10 } from './images.js'
import { Image11 } from './images.js'
import { Image12 } from './images.js'
// eslint-disable indent
export function GenerateImages(numofImg) {
  this.images = []
  this.imagesArray = []
  for (var j = 1; j < numofImg / 2 + 1; j++) {
    switch (j) {
      case 1:
        this.images.push(new Image1())
        break
      case 2:
        this.images.push(new Image2())
        break
      case 3:
        this.images.push(new Image3())
        break
      case 4:
        this.images.push(new Image4())
        break
      case 5:
        this.images.push(new Image5())
        break
      case 6:
        this.images.push(new Image6())
        break
      case 7:
        this.images.push(new Image7())
        break
      case 8:
        this.images.push(new Image8())
        break
      case 9:
        this.images.push(new Image9())
        break
      case 10:
        this.images.push(new Image10())
        break
      case 11:
        this.images.push(new Image11())
        break
      case 12:
        this.images.push(new Image12())
        break
    }
  }
  this.sortImages = function () {
    this.imagesArray = this.images.concat(this.images)
    this.imagesArray.sort(() => 0.5 - Math.random())
    return this.imagesArray
  }
  this.sortImages()
}
