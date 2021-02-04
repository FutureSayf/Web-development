const navslide = () =>
{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', ()=>
    {
        // toggle nav
        nav.classList.toggle('nav-active');
      
        // Animate Links
        navLinks.forEach((link, index) => 
        {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        console.log(index / 7);
        });

    });

}
navslide();
// const app = ()=>
// {
//     // roep al je functies aan
//     navslide();
// }


// TypeWriter effect
let app = document.getElementById('app');
let intro = document.getElementById('intro');

let typewriter = new Typewriter(app, 
    {
        loop: true
    });

    let typewriter1 = new Typewriter(intro, 
        {
            loop: true
        });

typewriter.typeString('<strong>a Creative mind</strong>')
    .pauseFor(1000)
    .deleteAll()

    .typeString('"Lost in <strong>Space</strong>"')
    .pauseFor(2500)
    .deleteAll()

    .typeString('<strong>Guided</strong> by <strong>Light</strong>')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Always Learning')
    .pauseFor(500)
    .deleteAll()

    .typeString('<strong>Dreaming</strong>')
    .pauseFor(100)
    .deleteChars(8)

    .typeString('<strong>Breathing</strong>')
    .pauseFor(100)
    .deleteChars(9)

    .typeString('<strong>LIVING</strong>')
    .pauseFor(2500)
    .deleteAll()

    .typeString('<strong>I</strong>')
    .pauseFor(3000)
    .deleteAll()

    .start();

    typewriter1.typeString('Traveling True ')
    .pauseFor(2500)
    // .deleteChars(1)

    .typeString('<strong>Time</strong>')
    .pauseFor(2500)
    .deleteAll()

    .typeString(' <strong>Developing</strong>')
    .pauseFor(1000)
    .deleteChars(8)

    .typeString('<strong>signing</strong>')
    .pauseFor(1000)
    .deleteAll()

    .typeString(' Traveling True Thoughts that Run My Mind.')
    .pauseFor(2500)
    .deleteAll()

    // .typeString('I  ')
    // .pauseFor(500)
    

    // .typeString('<strong>AM</strong> ')
    // .pauseFor(1500)

    .typeString('LIVING "LIVE".')
    .pauseFor(2500)
    .deleteAll()

    .pauseFor(500)
    .typeString('I <strong>AM</strong> Future.Sayf')
    .pauseFor(2500)
    // .deleteAll()

    .typeString(' DIGITAL')
    .pauseFor(2500)
    .deleteAll()

    .typeString('سیف الدین')
    .pauseFor(2500)
    .deleteAll()

    .start();

// END TYPEwriter https://github.com/tameemsafi/typewriterjs
// https://safi.me.uk/typewriterjs/   سیف الدین




/*--/ Star Typed /--*/

// function slider(){

//     if ($('.text-slider').length == 1) {
//         var typed_strings = $('.text-slider-items').text();
//             var typed = new Typed('.text-slider', {
//                 strings: typed_strings.split(','),
//                 typeSpeed: 80,
//                 loop: true,
//                 backDelay: 1100,
//                 backSpeed: 30
//             });
//         }

// }
// slider();
