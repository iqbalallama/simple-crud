showData()
let id = 'no'
function manageData(){
    const name = document.getElementById('name').value ;
    if(name == ''){
        alert('Please input your name')
    }else{
        if(id == 'no'){
            const arr = JSON.parse(localStorage.getItem('crud'));
            if(arr == null){
                let data = [name];
                localStorage.setItem('crud',JSON.stringify(data));
                }else{
                if(arr.indexOf(name) == -1){
                    arr.push(name);
                    localStorage.setItem('crud',JSON.stringify(arr));
                    document.querySelector('.para').innerText = 'Data Added';
                    setTimeout(()=>{
                        document.querySelector('.para').innerText = '';
                    },4000)
                }else{
                    document.querySelector('.para').innerText = 'Data Already Stored';
                    setTimeout(()=>{
                        document.querySelector('.para').innerText = '';
                    },4000)
                }
            }
        }else{
            const arr = JSON.parse(localStorage.getItem('crud'));
            arr[id] = name;
            localStorage.setItem('crud',JSON.stringify(arr));
        }
        document.getElementById('name').value = '';
        showData()
    }
}

function showData(){
    const arr = JSON.parse(localStorage.getItem('crud'));
    if(arr != null){
        let html = '';
        let sl = 1;
        
        for(let a in arr){
            html += `
                <tr>
                    <td>${sl}</td>
                    <td>${arr[a]}</td>
                    <td>
                    <button onclick="editData(${a})">Edit</button>
                    <button onclick="deleteData(${a})">Delete</button>
                    </td>
                </tr>
                
            `
            sl++;
            
        }
        document.getElementById('root').innerHTML = html;
       
    }
}
function editData(aid){
    id = aid;
    const arr = JSON.parse(localStorage.getItem('crud'));
    document.getElementById('name').value = arr[aid];
}
function deleteData(aid){
    console.log(aid);
    const arr = JSON.parse(localStorage.getItem('crud'));
    arr.splice(aid,1)
    localStorage.setItem('crud',JSON.stringify(arr));
    showData()
}