import 'virtual:windi.css'
import './style.css'

import './quotes'
import './uploadcare'

// import 3 different sizes of the image and create a srcset from them
import srcsetAvif from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;700;900;1200;1600&avif&srcset'
// do it a second time, but now as webp since safari can't display avif
import srcsetWebp from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;700;900;1200;1600&webp&srcset'
import srcsetJpg from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;700;900;1200;1600&jpg&srcset'
// create a small placeholder and import its metadata
import { src as placeholder, width, height } from './img/blur.jpg?width=300&metadata'

document.querySelector('#background').innerHTML = `
  <picture>
    <source scrset="${srcsetAvif}" type="image/avif"/>
    <source srcset="${srcsetWebp}" type="image/webp"/>
    <source srcset="${srcsetJpg}" type="image/jpg"/>
    <img
        src="${placeholder}"
        width="${width}"
        height="${height}"/>
  </picture>
`