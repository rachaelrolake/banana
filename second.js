
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } /*else {
            entry.target.classList.remove('show'); //this is to show the animation multiple times
        }*/
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));