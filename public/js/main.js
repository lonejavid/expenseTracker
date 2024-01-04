const form=document.getElementById('myform');
const list=document.getElementById('list');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const amount=document.getElementById('amount').value;
    const desc=document.getElementById('desc').value;
    const category=document.getElementById('category').value;
    const data={amount,
                desc,
            category};        
    await axios.post(`http://localhost:3000/add`,data).then(response=>{
        form.reset();
        list.innerHTML='';
        getData();
    });
});
async function getData(){
    const data=await axios.get('http://localhost:3000/getData');
    data.data.forEach(element => {
        const data=element.amount+' '+element.desc+' '+element.category;
        const li=document.createElement('li');
        li.innerHTML=data;
        const del=document.createElement('button');
        del.className="btn btn-danger";
        del.style.marginTop='0.2cm';
        del.innerHTML='Delete';
        const editBtn = document.createElement('button');
        editBtn.className = "btn btn-info";
        editBtn.style.marginTop = '0.2cm';
        editBtn.style.marginLeft='0.3cm';
        editBtn.innerHTML = 'Edit';
        li.append(del);
        li.append(editBtn)
        list.append(li);
        del.addEventListener('click',()=>{
            axios.delete(`http://localhost:3000/delete/${element.id}`);
            list.removeChild(li); 
        }); 
        editBtn.addEventListener('click', async() => {
            console.log("hello")
            // Populate form fields with data for editing
            document.getElementById('amount').value = element.amount;
            document.getElementById('desc').value = element.desc;
            document.getElementById('category').value = element.category;
            const id=element.id;
            const amount=element.amount;
            const desc=element.desc;
            const category=element.category;
            const data={id,amount,desc,category};
            console.log(data); 
            console.log('deara ')
            axios.delete(`http://localhost:3000/delete/${element.id}`);
            list.removeChild(li);
            await axios.put(`http://localhost:3000/edit/${id}`, data)
        });       
    });
}
window.onload=getData;
