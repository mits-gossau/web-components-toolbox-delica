import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class RecipeTable extends Shadow() {

  constructor(options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback() {
    if (this.shouldRenderCSS()) this.renderCSS()
  }

  shouldRenderCSS() {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS() {
    this.css = /* css */`
    table {
      border-collapse: collapse; 
      width:100%;
      border-radius:6px;
      overflow:hidden;
    }
    td,th{ 
      padding-left:8px;
    }
    thead tr        { 
      height:4em;
      background:#FFED86;
      font-size:16px;
    }


  



        `
  }
}
