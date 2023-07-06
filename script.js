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


function changetopnav(){
    var scrollvalue = window.scrollY;
    var topbar =  document.getElementById('topnav-fixed');
    var searchItem = document.getElementById('searchItem');
    console.log(scrollvalue);
    if(scrollvalue < 100){
        topbar.classList.remove('topbg')
        // alert("We have not scrolled yet")

    }else{
        topbar.classList.add('topbg');
        topbar.style.transition = 'all ease 3s';
    }
    // if (scrollvalue < 100) {
    //     topbar.classList.remove('topbg');
    //     searchItem.classList.remove('searchbarBg');

    // }
    // else{
    //     topbar.classList.add('topbg');
    //     searchItem.classList.add('searchbarBg');
    // }
}

window.addEventListener('scroll', changetopnav);