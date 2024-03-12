import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class BrandWrapper extends Shadow() {
  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`

    :host o-wrapper{
      --wrapper-teaser-align-items: var(--brand-wrapper-align-items, center);
    }

    :host {
      --any-display: var(--brand-wrapper-any-display, flex);
      flex-direction: var(--brand-wrapper-flex-direction, column);      
      justify-content: var(--brand-wrapper-justify-content, space-around);
      --img-height: var(--brand-wrapper-img-height, 1%);
      --picture-scale-up-img-height: var(--brand-wrapper-picture-scale-up-img-height, 8em);
      --picture-scale-up-img-width: var(--brand-wrapper-picture-scale-up-img-width, 10em);

    }
    @media only screen and (max-width: 767px) {
      :host{
        flex-direction: var(--brand-wrapper-flex-direction-mobile, row); 
        --picture-scale-up-img-height-mobile: var(--brand-wrapper-picture-scale-up-img-height-mobile, 5em);
        --picture-scale-up-img-width-mobile: var(--brand-wrapper-picture-scale-up-img-width-mobile, 10em);
      }
      brand-column{
        width: var(--brand-column-width-mobile, 45%);
      }
    }

        `
  }
}
