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
      --wrapper-teaser-align-items: center ;

    }

        `
  }
}
