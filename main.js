let element = {
    video_array: [...document.querySelector('video').children],
    video: document.querySelector('video'),
    btn_redo: document.querySelector('.step-forward'),
    btn_undo: document.querySelector('.step-back'),
    btn_velocity: document.querySelector('.btn-velocity'),
    toggle_autoplay: document.querySelector('.toggle-switch'),
    btn_resize: document.querySelector('.resize'),
    video_list: document.querySelector('.video-list'),
    velocity_container: document.querySelector('.velocity-container'),
    display_velocity: document.querySelector('.velocity-current'),
    input_velocity: document.querySelectorAll("input[name='velocity']"),
    container_1: document.querySelector('.container-1'),
    container_video: document.querySelector('.container-video'),
    container_list: document.querySelector('.container-video-list'),
    video_title: document.querySelector('.video-title'),
    autoplay_text: document.querySelector('.autoplay'),
    btn_backward: document.querySelector('.btn-backward'),
    btn_forward: document.querySelector('.btn-forward')
}

let video_dom_controler = {
    selected: 0,
    src_video: [],
    flag: false
};

let playlist = {
    media: [
 {  title: '	01.Ertugrul Ghazi Urdu _ Episode 1_ Season 4          	', desription: '', duration: '', },
 {  title: '	02.Ertugrul Ghazi Urdu _ Episode 2_ Season 4          	', desription: '', duration: '', },
 {  title: '	03.Ertugrul Ghazi Urdu _ Episode 3_ Season 4          	', desription: '', duration: '', },
 {  title: '	04.Ertugrul Ghazi Urdu _ Episode 4_ Season 4          	', desription: '', duration: '', },
 {  title: '	05.Ertugrul Ghazi Urdu _ Episode 5_ Season 4          	', desription: '', duration: '', },
 {  title: '	06.Ertugrul Ghazi Urdu _ Episode 6_ Season 4          	', desription: '', duration: '', },
 {  title: '	07.Ertugrul Ghazi Urdu _ Episode 7_ Season 4          	', desription: '', duration: '', },
 {  title: '	08.Ertugrul Ghazi Urdu _ Episode 8_ Season 4          	', desription: '', duration: '', },
 {  title: '	09.Ertugrul Ghazi Urdu _ Episode 9_ Season 4          	', desription: '', duration: '', },
 {  title: '	10.Ertugrul Ghazi Urdu _ Episode 10_ Season 4          	', desription: '', duration: '', },
 {  title: '	11.Ertugrul Ghazi Urdu _ Episode 11_ Season 4          	', desription: '', duration: '', },
 {  title: '	12.Ertugrul Ghazi Urdu _ Episode 12_ Season 4          	', desription: '', duration: '', },
 {  title: '	13.Ertugrul Ghazi Urdu _ Episode 13_ Season 4          	', desription: '', duration: '', },
 {  title: '	14.Ertugrul Ghazi Urdu _ Episode 14_ Season 4          	', desription: '', duration: '', },
 {  title: '	15.Ertugrul Ghazi Urdu _ Episode 15_ Season 4          	', desription: '', duration: '', },
 {  title: '	16.Ertugrul Ghazi Urdu _ Episode 16_ Season 4          	', desription: '', duration: '', },
 {  title: '	17.Ertugrul Ghazi Urdu _ Episode 17_ Season 4          	', desription: '', duration: '', },
 {  title: '	18.Ertugrul Ghazi Urdu _ Episode 18_ Season 4          	', desription: '', duration: '', },
 {  title: '	19.Ertugrul Ghazi Urdu _ Episode 19_ Season 4          	', desription: '', duration: '', },
 {  title: '	20.Ertugrul Ghazi Urdu _ Episode 20_ Season 4          	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 21- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 22- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 23- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 24- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 25- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 26- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 27- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 28- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 29- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 30- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 31- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 32- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 33- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 34- Season 4              ', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 35- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 36- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 37- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 38- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 39- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 40- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 41- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 42- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 43- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 44- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 45- Season 4            	', desription: '', duration: '', },
 {  title: '	Ertugrul Ghazi Urdu - Episode 46- Season 4            	', desription: '', duration: '', },



    ],
};

element.video_array.forEach(vid =>{
    video_dom_controler.src_video.push(vid.src);
 });

let total_video = element.video_array.reduce((total, next)=>{
    return total + 1;
}, 0);

element.video.addEventListener('durationchange', function() {
    //console.log('Duration change', element.video.duration);
});


function activate(index){
    element.video_list.children[index].classList.add('active-video-list');
    element.video_list.children[index].firstChild.classList.add('active-circle');
    element.video_title.innerHTML = playlist.media[index].title;
}


function VideoContainerLoad(){

    function render(){
        let str = '';
        for (let i = 0; i < playlist.media.length; i++){
             let list = document.createElement('li');
             let span = document.createElement('span');
             let text = document.createTextNode(playlist.media[i].title);
             list.appendChild(span);
             list.appendChild(text);
             element.video_list.appendChild(list);
        }  
    }

    function changeSource(url){
        var video = element.video;
        video.src = url;
        //video.play();
    }
    

    function checkedRadio(){
        element.input_velocity.forEach(cur => {
            cur.checked = false;
            if(cur.value == 1) cur.checked = true;
            console.log(cur.value)
        });
    }


    function init(){
        render();
        changeSource(video_dom_controler.src_video[0]);
        checkedRadio();
        activate(0);
    }

    return {
        init
    }
}

function getIndex(str){
    for(let i = 0; i < playlist.media.length; i++){
        if(str == playlist.media[i].title) return i;
    }
    return -1;
}

function changeSource(url){
    var video = element.video;
    video.src = url;
    video.play();
}

function removeAllActiveClass(){
    let arr = [...element.video_list.children];
    arr.forEach(cur => {
        cur.classList.remove('active-video-list');
        cur.firstChild.classList.remove('active-circle');
    });
}


function insertVelocity(arr){
    element.input_velocity.forEach(cur => arr.push(cur.value));
}

function containVelocity(arr, value){
    for (cur of arr){
        if(cur == value) return true;
    }
    return false;
}


element.toggle_autoplay.addEventListener('click', ()=>{
    if(element.toggle_autoplay.checked){
        video_dom_controler.flag = true;
        element.autoplay_text.style.color = 'greenyellow';
    } else{
        video_dom_controler.flag = false;
        element.autoplay_text.style.color = 'var(--grey-strong)';
    }
});

element.velocity_container.addEventListener('click', function(e){
    let event = e.target;
     let arrVelocity = [];
     insertVelocity(arrVelocity);
     if(containVelocity(arrVelocity, event.value)){
         element.video.playbackRate = event.value;
    }
    
});


 element.video.addEventListener('ended', ()=>{
    if(video_dom_controler.flag){
        removeAllActiveClass();
        if(video_dom_controler.selected + 1 < total_video) video_dom_controler.selected += 1;
        else video_dom_controler.selected = 0;
        changeSource(video_dom_controler.src_video[video_dom_controler.selected]);
        element.video_title.innerHTML = playlist.media[video_dom_controler.selected].title;
        activate(video_dom_controler.selected);
    }
});


element.btn_undo.addEventListener('click',()=>{
    element.video.currentTime -= 10;
});

element.btn_redo.addEventListener('click', ()=>{
    element.video.currentTime += 10;
});



element.video_list.addEventListener('click', (e)=>{
    let event = e.target;
    let index = getIndex(event.lastChild.textContent);
    if(index != -1){
        removeAllActiveClass();
        video_dom_controler.selected = index;
        event.classList.add('active-video-list');
        event.firstChild.classList.add('active-circle');
        element.video_title.innerHTML = playlist.media[index].title;
        changeSource(video_dom_controler.src_video[index]);
    }
});


window.addEventListener('load', (e)=>{
    const videoContainerLoad = VideoContainerLoad();
    videoContainerLoad.init();
});

element.btn_resize.addEventListener('click', ()=>{
    element.container_1.classList.toggle('resize-container-1');
    element.container_video.classList.toggle('resize-video');
    element.container_list.classList.toggle('resize-list');
});


element.btn_velocity.addEventListener('click', ()=>{
    element.velocity_container.classList.toggle('active');
});

element.btn_backward.addEventListener('click',()=>{
    removeAllActiveClass();
    if(video_dom_controler.selected - 1 > -1 ) video_dom_controler.selected -= 1;
    else video_dom_controler.selected = 0;
    changeSource(video_dom_controler.src_video[video_dom_controler.selected]);
    element.video_title.innerHTML = playlist.media[video_dom_controler.selected].title;
    activate(video_dom_controler.selected);
});

element.btn_forward.addEventListener('click',()=>{
    removeAllActiveClass();
    if(video_dom_controler.selected + 1 < total_video) video_dom_controler.selected += 1;
    else video_dom_controler.selected = 0;
    changeSource(video_dom_controler.src_video[video_dom_controler.selected]);
    element.video_title.innerHTML = playlist.media[video_dom_controler.selected].title;
    activate(video_dom_controler.selected);
});




