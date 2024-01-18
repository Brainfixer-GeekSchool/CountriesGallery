const slides = document.querySelectorAll('.slide');

for(const slide of slides){
    slide.addEventListener('click', function(){
        console.log("128");
        for (const slide of slides){
            slide.classList.remove('active');
        }
        slide.classList.add('active');
        document.body.style.backgroundImage = slide.style.backgroundImage;
    } );
}
