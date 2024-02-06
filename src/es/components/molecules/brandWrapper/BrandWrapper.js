import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class BrandWrapper extends Shadow() {

  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    console.log("test");

  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`

    :host o-wrapper{
      --wrapper-teaser-align-items: center;
    }

    :host {
      --any-display: flex;
      flex-direction: column;      
      justify-content: space-around;
      --img-height: 1%;
      --picture-scale-up-img-height: 8em;
      --picture-scale-up-img-width: 10em;

    }


    @media only screen and (max-width: 767px) {
      :host{
        flex-direction: row; 
        --picture-scale-up-img-height-mobile: 5em;
        --picture-scale-up-img-width-mobile: 10em;
      }
      brand-column{
        width: 45%;
      }
    }

        `
  }
}
