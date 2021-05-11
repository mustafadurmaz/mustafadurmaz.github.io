function copy(id){
    document.getElementById(id).select();
    document.execCommand('copy');
    notification('Kopyalama Başarılı');
}

function notification(msg){
    let old_div=document.querySelector('.alert');
    if(old_div){
        old_div.parentNode.removeChild(old_div);
    }
    
    let div=document.createElement('div');
    div.className='alert';
    div.innerHTML=msg;
    document.body.appendChild(div);

    setTimeout(function(){
        div.classList.add('active');
    }, 10);

    setTimeout(function(){
        div.classList.remove('active');
    }, 1000);

}
