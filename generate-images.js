import {Image1} from "/images.js";
import {Image2} from "/images.js";
import {Image3} from "/images.js";
import {Image4} from "/images.js";
import {Image5} from "/images.js";
import {Image6} from "/images.js";
import {Image7} from "/images.js";
import {Image8} from "/images.js";

export function GenerateImages(numofImg){
    this.images = [];
    for(var j = 1; j < (numofImg / 2) + 1; j++){
        switch(j){
            case 1:
                this.images.push(new Image1());
                break;
            case 2:
                this.images.push(new Image2());
                break;
            case 3:
                this.images.push(new Image3());
                break;
            case 4:
                this.images.push(new Image4());
                break;
            case 5:
                this.images.push(new Image5())
                break;
             case 6:
                this.images.push(new Image6());
                break;
             case 7:
                this.images.push(new Image7());
                break;
             case 8:
                this.images.push(new Image8());
                break;
        }
    }
    this.imagesArray = this.images.concat(this.images);
    this.imagesArray.sort(() => 0.5 - Math.random());
}