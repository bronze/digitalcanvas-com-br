// console.log("Alpine Loaded")

import Alpine from 'alpinejs';



window.Alpine=Alpine;

// Alpine.plugin(persist);

document.addEventListener('alpine:init', () => {

});

// debug: hideOnClick: false, trigger: 'click',
Alpine.start();
