let grandParent=document.querySelector('.grandParent')
let parent=document.querySelector('.parent')
let child=document.querySelector('.child')


grandParent.addEventListener('click', ()=>{
    console.log('grandparent')
})


parent.addEventListener('click', ()=>{
    console.log('parent')
})

child.addEventListener('click', ()=>{
    console.log('child')
})

window.addEventListener('click', ()=>{
    console.log('window')
})

