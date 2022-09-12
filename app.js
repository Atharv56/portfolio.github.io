const sections = document.querySelectorAll('.section')
const sectbtns = document.querySelectorAll('.controlls')
const sectbtn = document.querySelectorAll('.control')
const allsections = document.querySelector('.main-content')


function pageTransition(){
    //button click active class
    for(let i = 0; i < sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function(){
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn', '');
            this.className = this.className + ' active-btn';
        })
    }

    //sections active class
    
    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectbtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections

            sections.forEach((section) => {
                section.classList.remove('active')

            })

            const element = document.getElementById(id)
            element.classList.add('active')

        }

    })

}
pageTransition()