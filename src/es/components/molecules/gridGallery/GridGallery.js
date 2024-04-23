import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class GridGallery extends Shadow() {
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
    this.setCss(`

    :host {
      --picture-scale-up-img-width: 100%;
      --picture-scale-up-img-height: 100%;
      --picture-scale-up-img-object-fit: cover;

    }`,undefined, false, false)
    this.css = /* css */`

    :host{
      width: 100%;
      margin: 2rem auto;
    }
    
    .gallery {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 5vw);
      grid-gap: 1.5rem;
    }

    .gallery__img {
      width: 100%;
      height: 100%;
      display: block; 
      cursor: pointer;
    }

    :host picture img {
      --picture-scale-up-img-object-fit: cover;
    }

    .gallery__item {
      position: relative;
    }
    
    .gallery__button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0; /* Initially hidden */
      transition: opacity 0.3s ease;
    }
    
    .gallery__button a {
      display: block; /* Make anchor tag a block element to cover the button area */
      text-decoration: none;
    }
    
    .gallery__button button {
      background: gray;
      border: 2px solid white;
      color: white;
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
    }
    
    .gallery__item:hover .gallery__button {
      opacity: 1; /* Show button on hover */
    }
    
    .gallery__item:hover .gallery__button:hover {
      opacity: 1; /* Ensure button remains visible when hovered over */
    }
    
    .gallery__item__1 {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }
    
    .gallery__item__2 {
      grid-column: 3 / span 2;
      grid-row: 1 / span 2;
    }
    
    .gallery__item__3 {
      grid-column: 5 / span 4;
      grid-row: 1 / span 5;
    }
    
    .gallery__item__4 {
      grid-column: 1 / span 4;
      grid-row: 3 / span 3;
    }
    
    .gallery__item__5 {
      grid-column: 1 / span 4;
      grid-row: 6 / span 3;
    }
    
    .gallery__item__6 {
      grid-column: 5 / span 4;
      grid-row: 6 / span 3;
    }
    
    @media screen and (max-width: 768px) {
      .container {
        width: 80%;
      }
      
      .gallery {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(8, 15vw);
      }
      
      .gallery__item__1 {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
      
      .gallery__item__2 {
        grid-column: 3 / span 2;
        grid-row: 1 / span 2;
      }
      
      .gallery__item__3 {
        grid-column: 1 / span 4;
        grid-row: 3 / span 4;
      }
      
      .gallery__item__4 {
        grid-column: 1 / span 2;
        grid-row: 7 / span 2;
      }
      
      .gallery__item__5 {
        grid-column: 3 / span 2;
        grid-row: 7 / span 2;
      }
      
      .gallery__item__6 {
        grid-column: 1 / span 4;
        grid-row: 9 / span 3;
      }
    }
    
    @media screen and (max-width: 480px) {
      .container {
        width: 90%;
      }
      
      .gallery {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(9, 30vw);
        grid-gap: 1rem;
      }
      
      .gallery__item__1,
      .gallery__item__2 {
        grid-column: auto;
        grid-row: auto;
      }
      
      .gallery__item__3 {
        grid-column: 1 / span 2;
        grid-row: 3 / span 4;
      }
      
      .gallery__item__4,
      .gallery__item__5 {
        grid-column: auto;
        grid-row: auto;
      }
      
      .gallery__item__6 {
        grid-column: 1 / span 2;
        grid-row: 7 / span 3;
      }
    }
      `
  }
}
