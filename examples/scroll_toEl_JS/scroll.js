const btn = document.getElementById('btn')
const box = document.querySelector('.box')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('addEL done done')
    setTimeout(() => {
        console.log('timeout done')
        box.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }, 300)
});
