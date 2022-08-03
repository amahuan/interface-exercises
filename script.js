const dropDown=document.querySelectorAll('.projectNames');
const photos=document.getElementById('photos');
const nextPhoto=document.querySelector('.right');
const prevPhoto=document.querySelector('.left');
const photoSelector=document.querySelectorAll('.dot');

dropDown.forEach(action=>action.addEventListener('click', toggle));

photos.addEventListener('click', ()=>{
    document.querySelector('.reel').classList.toggle('show');
});

nextPhoto.addEventListener('click',()=>{
next();
});

prevPhoto.addEventListener('click',()=>{
previous();
});

photoSelector.forEach(action=>action.addEventListener('click',()=>{
    var photoIndex=action.id.slice(-1);
    shifter(photoIndex);
}));


// helper functions
function toggle(){
    for(let i=0;i<dropDown.length;i++){
        if(dropDown[i].children[1].classList.contains('show')){
            dropDown[i].children[1].classList.remove('show');
        }
    }
    this.children[1].classList.toggle('show');
}

function shifter(num){
    var difference=(currentPic()-num)*500;
    for (let i=1;i<=5;i++){
        var pic=document.getElementById('pic'+ i);
        var picPosition=Number(getComputedStyle(pic).getPropertyValue("left").slice(0, getComputedStyle(pic).getPropertyValue("left").length - 2))+difference;
        pic.style.left=picPosition.toString()+"px";
        document.getElementById("dot" + num).checked=true;
    }
};

function currentPic(){
    for(let i=1;i<=5;i++){
        var pic=document.getElementById('pic'+ i);
        if(getComputedStyle(pic).getPropertyValue("left")==="0px"){
            return i;
        }
    }
}

function next(){
    if(currentPic()!==5){
        var next=currentPic()+1;
        shifter(next);
    }
    else{
        shifter(1);
    }
}

function previous(){
    if(currentPic()!==1){
        var last=currentPic()-1;
        shifter(last);
    }
    else{
        shifter(5);
    }
}

function startShow() {
    const slideShow = setInterval(() => {
      next();
    }, 3000);
  }

  startShow();