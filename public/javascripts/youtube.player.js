// const id = window.location.href
//   .replace(/^.*\//g, '')
//   .replace(/^.*\..*/g, '');

// const container = document.getElementById('youtube-player').firstChild; 
// container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;

// ------------ Optimization Iterations done for this file ----------------
// First Iteration (Resultant code shown in the comments above)
// getElementById is faster than getElementByClassName
// used const intead of var, as value of container remains the same. const is es6 keyword here which has block scope
// Removed settimeout function, to eliminate the wait time of 300ms that it was causing.

// Second Iteration
// File no longer needed as params available in request already. Script is now commented in the pug and no longer used to speed up the app