let container=document.querySelector('.container');
let arr=[];
let page=1;

const fetchData=(page)=>{
   fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=12`)
   .then((res)=>res.json())
   .then((ans)=>{
    arr=[...ans]
    console.log(arr)
    showData(arr)
})
   .catch((err)=>console.log(err))
}
fetchData(page)


const showData=(data)=>{
  
    data?.map((elem, idx)=>{
        let box=document.createElement('div')
        
        let p=document.createElement("p")
        p.textContent=elem.body;

        let h2=document.createElement('h2')
        h2.textContent=elem.title

        box.append(p, h2)
        container.append(box)
    })
}

window.addEventListener('scroll', ()=>{
    let scrollHeight=document.documentElement.scrollHeight;
    let scrollTop=document.documentElement.scrollTop;
    let clientHeight=document.documentElement.clientHeight;
    console.log(scrollHeight, clientHeight)

    if((scrollHeight-clientHeight)<=Math.ceil(scrollTop)){
        page++
        fetchData(page);
    }
})