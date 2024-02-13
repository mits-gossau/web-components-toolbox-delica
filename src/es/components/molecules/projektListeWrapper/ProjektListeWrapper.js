import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class ProjektListeWrapper extends Shadow() {

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
    :host{
        --h-margin-bottom:0.5em;
        --wrapper-text-flex-wrap:nowrap;
        
    }

        `
  }
}