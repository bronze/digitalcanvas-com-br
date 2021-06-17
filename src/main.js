import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './quotes'
import './user-interaction-load'

// https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3
// 1920px (this covers FullHD screens and up)
// 1600px (this will cover 1600px desktops and several tablets in portrait mode, for example iPads at 768px width, which will request a 2x image of 1536px and above)
// 1366px (it is the most widespread desktop resolution)
// 1024px (1024x768 screens, excluding iPads which are hi-density anyway, are rarer, but I think you need some image size in between, not to leave too big a gap between pixel sizes, in case the market changes)
// 768px (useful for 2x 375px mobile screens, as well as any device that actually requests something close to 768px)
// 640px (for smartphones)


// import 3 different sizes of the image and create a srcset from them
import srcsetAvif from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;640;768;1024;1200;1366;1600;1920&avif&srcset'
// do it a second time, but now as webp since safari can't display avif
import srcsetWebp from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;640;768;1024;1200;1366;1600;1920&webp&srcset'
import srcsetJpg from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?w=500;640;768;1024;1200;1366;1600;1920&jpg&srcset'
// create a small placeholder and import its metadata
import { src as placeholder, width, height } from './img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?width=600&blur=30&quality=50&metadata'

// lets try rushing LCP
document.body.style.background = `#000000 url(${placeholder}) no-repeat center center / cover`

document.querySelector('#background').innerHTML = `
  <picture>
    <source scrset="${srcsetAvif}" type="image/avif"/>
    <source srcset="${srcsetWebp}" type="image/webp"/>
    <source srcset="${srcsetJpg}" type="image/jpg"/>
    <img
        src="${placeholder}"
        width="${width}"
        height="${height}"
        alt="Laptop in the dark." />
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