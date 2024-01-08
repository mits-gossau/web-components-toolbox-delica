import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class StandortePicker extends Shadow() {
  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    console.log('connected')
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`

    :host{
      width: 100%;
      height: 70vh;

      --display-active: flex;

    }

    m-tabs{
      --background-color: rgb(224, 177, 92);
      --color-active: rgb(224, 177, 92);

    }

    m-tabs .tab-content{
      justify-content: space-evenly;

    }
    
  
    .left-container{
      width: 60%;
      height: 100%;
      padding: 3%;

    }
    m-tabs section .right-container{
      padding: 3%;
      width: 30%;
      border-left: 1px solid black;

    }
    @media only screen and (max-width: 1200px) {      
      :host{
        width: 100%;
        height: fit-content;
        padding-bottom: 5%;
      }

  }

  @media only screen and (max-width: 768px) {      
    :host{
      overflow: hidden;
    }
    m-tabs{
      --tab-justify-content: space-around;

    }

  }

      `
  }
}
