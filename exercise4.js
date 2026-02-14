const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
    // BUG: this.classList.add('active') throws an error
    event.currentTarget.classList.add('active');
});

// The arrow functions fails in this context because when you use this in an arrow function it returns the 
// surrounding scope in this case the window which doesn't have a classList property so it returns an error


//event.currentTarget returns the current element that was clicked and this solves the problem because it is able access
//the element which has a classList property and add active
