import 'virtual:windi.css'
import './style.css'

import './quotes'

// import 3 different sizes of the image and create a srcset from them
import srcsetAvif from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;700;900;1200;1600&avif&srcset'
// do it a second time, but now as webp since safari can't display avif
import srcsetWebp from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;700;900;1200;1600&webp&srcset'
import srcsetJpg from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;700;900;1200;1600&jpg&srcset'
// create a small placeholder and import its metadata
import { src as placeholder, width, height } from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?width=300&blur=100&quality=30&metadata'

// lets try rushing LCP
document.body.style.background = `#000000 url(${placeholder}) no-repeat center center`

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



// This might be fun
// https://code.likeagirl.io/js-set-a-background-using-code-1cc26cf96ce4
//
//
// Object containing url links to images from Unsplash
//
// const IMAGE_URLS = {
//   nature: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80',
//   pencils: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
// };
// Sets the background image
// const setBackground = (image) => {
//   document.body.style.background = "url('"+IMAGE_URLS.[image]+"')";
// };
// if (isWeekend) {
//   setBackground('nature');
// } else {
//   setBackground('pencils');
// }