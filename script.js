if(window.innerWidth > '500px'){
    document.getElementById('nav-button').style.display = 'none';
}

const navbutton = document.getElementById("nav-button");
const miniNav = document.getElementById("mini-nav")
navbutton.addEventListener('click', ()=>{
    // alert('hello world...')
    if(miniNav.style.display == 'none'){
        miniNav.style.display = 'block'
    }
})

const width = innerWidth;
console.log(width);