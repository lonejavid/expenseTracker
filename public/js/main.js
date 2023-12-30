const form = document.getElementById('form');
const listItems=document.getElementById('list')
form.addEventListener('submit', async(event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const amount = document.getElementById('amount').value;
    const desc = document.getElementById('desc').value;
    const category = document.getElementById('category').value;

    await axios.post(`http://localhost:3000/add`,{amount,desc,category}).then((result)=>{
        console.log(result)
    })


    
    const data=amount +' '+desc+' '+category+'  ';
    const li=document.createElement('li');
    const delbtn=document.createElement('button');
    delbtn.innerHTML="Delete";
    delbtn.className="btn btn-primary"
    li.className="list-group-item";
    li.innerHTML=data;
    li.append(delbtn);
    listItems.append(li);
    delbtn.addEventListener('click',()=>{
        listItems.remove(li);
    })

    
});
