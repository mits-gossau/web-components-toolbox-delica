import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class RecipeTable extends Shadow() {
  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    const tableHeader = this.root.querySelectorAll('th')
    const tableBody = this.root.querySelector('tbody')



    let tableWideHeaderCounter = 0;
    let tableHeaderCounter = 0;
    const wideHeaderWidth = 35;


    tableHeader.forEach(element => {
      if (element.classList.contains('wide_head')) {
        element.style.width = wideHeaderWidth + '%'
        tableWideHeaderCounter++
        console.log(tableWideHeaderCounter)
      } else {
        tableHeaderCounter++  
        console.log(tableHeaderCounter)
      }
    })

    tableHeader.forEach(element => {
      if (!(element.classList.contains('wide_head'))) {
        element.style.width = ((100 - (tableWideHeaderCounter * wideHeaderWidth)) / tableHeaderCounter) + '%'
      }
    })

    for (let i = 1; i < tableBody.children.length; i += 2) {
      tableBody.children[i].classList.add('tint');
  }
    
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`
    table {
      border-collapse: collapse; 
      max-width: 10rem;
      width:auto;
      border-radius:6px;
      overflow:hidden;
      box-sizing: border-box;
    }
    td,th{ 
      padding-left:8px;
    }
    thead tr        { 
      height:var(--recipe-table-header-height, 3em);
      color:var(--background-color, white); 
      background:var(--color-tertiary, var(--color-secondary, black));
      font-weight:bold;
    } 

    .bold{
      font-weight: bold;
    }

    :host p{
      font-size: small;
      text-align: left; 
    }

    .tint{
      background-color: #dcdcdc;
    }


  



        `
  }
}
