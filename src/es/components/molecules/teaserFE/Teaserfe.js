import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class TeaserFE extends Shadow() {
  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    const imageholder = this.root.querySelector('.image')

    imageholder.addEventListener('click', (event) => {
      console.log(event)
    })
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`

        :host {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 5%; 

        }
    
        .column-left {
            height: 100%;
        }
        
        .higher {
            height: 40%;
        }
        
        .lower {
            height: 35%;
        }
        
        .longer {
            width: 60%;
        }
        
        .shorter {
            width: 40%;
        }
        
        .same {
            width: 50%;
        }
        
        .teaser-container {
            color: white;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
    
        }
    
        
        .w {
            width: 1em;
            height: 100%;
        }
    
        .h {
            width: 100%;
            height: 1vh;
        }
        
        .sub {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-position: center;
            background-size: cover;
            position: relative;
            overflow: hidden;
        }
        
        .sub a-picture {
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            top: 0;
            left: 0;
        }
        .img {
            height: 100%;
        }        
        .title {
            font-size: x-large;
            position: relative;
            z-index: 1;
        }  
        
        .row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 2%;
        }
        .big-image {
            height: 100%;
            box-sizing: border-box;
            background: none;
        }
        .column-right {
            justify-content: space-between;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .small-image {
            height: 47.5%;
            box-sizing: border-box;
            background: none;
        }
        .image:hover {
            cursor: pointer;
            opacity: 1;
        
        }

        .image:hover .title{
            color: rgb(214, 169, 88);

        }
        
        .image:hover a-picture {
            filter: grayscale(100%);

        }

        a{
            text-decoration-line: none;
            color: white;
        }
        `
  }
}
