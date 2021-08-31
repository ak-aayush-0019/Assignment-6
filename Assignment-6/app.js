const inp=document.querySelector('input[type="text"]');
const list=document.getElementById('list');
inp.addEventListener('keypress',function(e){
 
    if(e.which===13){
        const li=document.createElement('li');
        li.innerHTML=inp.value+'&nbsp;&nbsp;&nbsp'+'<i class="bi bi-trash"></i>'+'&nbsp;&nbsp'+'<i class="bi bi-arrow-down-left-circle-fill"></i>'+'&nbsp;&nbsp;'+'<i class="bi bi-caret-down"></i>'+'&nbsp;&nbsp;'+'<i class="bi bi-caret-up-fill"></i>';
        
       
        li.children[0].addEventListener('click',()=>{
            li.remove();
        })
        li.children[1].addEventListener('click',()=>{
            li.contentEditable="true";
        })
        li.children[2].addEventListener('click',(e)=>{
       
                   
            var $ul = $('ul')
            var $li = $('li');
          

            if ($li.is(':last-child') )
              $ul.prepend(li);  
        else{
            $li.insertAfter($li.next());   
        }
                         
               
        })


        li.children[3].addEventListener('click',()=>{
            var $ul = $('ul')
            var $li = $('li');

            $ul.append($li.prev().prevObject.prevObject[0].all[18]);
          
      
        })


          
    list.appendChild(li);
    inp.value="";
    }
});