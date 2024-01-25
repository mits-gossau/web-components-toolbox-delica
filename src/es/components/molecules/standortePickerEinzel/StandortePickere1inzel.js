import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class StandortePickerEinzel extends Shadow() {
  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
    this.hotspots = this.root.querySelectorAll('a-hotspot')
    this.descriptions = this.root.querySelectorAll('.description')
    this.currentDescription = this.root.querySelector(".description[id='1']")
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()

    this.setCurrentDescription()

    this.hotspots.forEach(hotspot => {
      hotspot.addEventListener('click', event => this.setCurrentDescription(event))
    })
  }

  setCurrentDescription (event) {
    if (event != null) {
      this.currentDescription.classList.remove('active')
      this.descriptions.forEach(desc => {
        if (event.target.getAttribute('id') === desc.getAttribute('id')) {
          this.currentDescription = desc
          this.currentDescription.classList.add('active')
        }
      })
    } else {
      this.currentDescription.classList.add('active')
    }
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`

    :host{
      width: 100%;
      height: 100%;
    }
    .slide{
      display: flex;
      text-align: left;


    }
    a-picture{
      float: left;
      --img-max-width: 70%;
      padding: 5%;

    }
    .description{
      height: 100%;
      display: none;

    }
    h2{
      padding-top: 2%;
      font-size: large;
    }

    p{
      font-size: small;
    }
    
    .left-container{
      width: 60%;
      height: 100%;
      padding: 2%;

    }
  .right-container{
      padding: 3%;
      width: 30%;
      border-left: 1px solid grey;
      
    }
    
    .active{
      display: block;

    }

    @media only screen and (max-width: 1200px) {      
      :host{
        width: 100%;
        height: 100vh;
      }

      .slide{
        flex-direction: column;

      }
      .right-container{
        width: 100%;
        border-left: none;
        border-top: 1px solid grey;


      }

      a-picture{
        --img-max-width: 30%;
      }

      .left-container{
        width: 100%;
      }



    
      
    }





      `
  }
}
