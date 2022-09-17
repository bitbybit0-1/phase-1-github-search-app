document.addEventListener("DOMContentLoaded",()=>{
const norm=document.getElementById('github-form')
norm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("event",event.target.children[0].value)
    fetch(`https://api.github.com/search/users?q=${event.target.children[0].value}`,{
    header:{

        Accept:"application/vnd.github.v3+json"
    }})
    .then(resp=>resp.json())
    .then(data=>data.items.forEach((item)=>{
        console.log(data)
    const divide=document.getElementById('github-container')
    const image=document.createElement('img')
    const li=document.createElement('li')
    const user_list=document.getElementById('user-list')
    li.textContent=event.target.children[0].value
    const itemUrl= item.repos_url
    const repo=document.createElement("a")
    repo.setAttribute('href',itemUrl)
    repo.textContent="repository"
    
    image.src=item.avatar_url
        divide.append(image)
        user_list.append(repo,li)
    }))
       /* const repos=document.getElementById('user_list')
        const user=document.getElementById('repos_list')
        let li=document.createElement('li')
        li.textContent=item.repos_url
        user.append(li)
        item.avatar_url;*/

    })

    
        
   
                    


    })
       

   

