/* script file */

const containor=document.getElementById('containor')
const add=document.getElementById('add')

function Add(){
    let inp=document.getElementById('inp')
    if (inp.value === ""){
        alert('plese enter some thing')
    }

    else{
        let lst=document.createElement('ls')
        lst.className='lst'
        
        let spn=document.createElement('span')
        spn.innerText=inp.value
        inp.value=""

        let btn_con=document.createElement('div')
        btn_con.className='btn_con'

        let done_btn=document.createElement('button')
        done_btn.innerText='D'
        done_btn.className='don'

        let del_btn=document.createElement('button')
        del_btn.innerText='X'
        del_btn.className='del'


        done_btn.addEventListener('click',()=>{
            spn.style.textDecoration="line-through"
        })

        del_btn.addEventListener('click',()=>{
            lst.remove()
        })

        btn_con.append(done_btn,del_btn)
        lst.append(spn,btn_con)
        containor.appendChild(lst)
    }
}
