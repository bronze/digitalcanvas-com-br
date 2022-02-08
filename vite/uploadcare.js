(function(src, cb) {
  var s = document.createElement('script'); s.setAttribute('src', src);
  s.onload = cb; (document.head || document.body).appendChild(s);
})('https://ucarecdn.com/libs/blinkloader/3.x/blinkloader.min.js', function() {
  window.Blinkloader.optimize({
    pubkey:'662f44d11fd2aa557e55',
    fadeIn:false,
    progressive: true,
    lazyload:true,
    smartCompression:true,
    responsive:true,
    retina:true,
    webp:true
  });
})