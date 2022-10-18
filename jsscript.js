let pics = document.getElementsByClassName('pics');
let circles = document.getElementsByClassName('circles');

pics[0].classList.remove('hidden');
pics[0].classList.add('shown');

const nextpic = (picid) => {
    let currentpic = document.getElementById(picid);
    currentpic.classList.remove('shown');
    currentpic.classList.add('hidden');
    let picnum = Number(picid);

    let currentcircle = document.getElementById(`cir${picnum}`);
    currentcircle.classList.remove('selected');
    currentcircle.classList.add('default');
    
    if (picnum < (pics.length-1)) {
        let nextpicnum = picnum + 1;
        let nextpicid = nextpicnum.toString();
        let nextpic = document.getElementById(nextpicid);
        nextpic.classList.remove('hidden');
        nextpic.classList.add('shown');

        let nextcircle = document.getElementById(`cir${nextpicnum}`);
        nextcircle.classList.remove('default');
        nextcircle.classList.add('selected');

    }

    else if (picnum == (pics.length-1)) {
        let nextpicnum = 0;
        let nextpicid = nextpicnum.toString();
        let nextpic = document.getElementById(nextpicid);
        nextpic.classList.remove('hidden');
        nextpic.classList.add('shown');

        let nextcircle = document.getElementById(`cir${nextpicnum}`);
        nextcircle.classList.remove('default');
        nextcircle.classList.add('selected');
    }

}

const lastpic = (picid) => {
    let currentpic = document.getElementById(picid);
    currentpic.classList.remove('shown');
    currentpic.classList.add('hidden');
    let picnum = Number(picid);

    let currentcircle = document.getElementById(`cir${picnum}`);
    currentcircle.classList.remove('selected');
    currentcircle.classList.add('default');

    if (picnum > 0) {
        let lastpicnum = picnum - 1;
        let lastpicid = lastpicnum.toString();
        let lastpic = document.getElementById(lastpicid);
        lastpic.classList.remove('hidden');
        lastpic.classList.add('shown');

        let lastcircle = document.getElementById(`cir${lastpicnum}`);
        lastcircle.classList.remove('default');
        lastcircle.classList.add('selected');
    }

    else if (picnum == 0) {
        let lastpicnum = pics.length-1;
        let lastpicid = lastpicnum.toString();
        let lastpic = document.getElementById(lastpicid);
        lastpic.classList.remove('hidden');
        lastpic.classList.add('shown');

        let lastcircle = document.getElementById(`cir${lastpicnum}`);
        lastcircle.classList.remove('default');
        lastcircle.classList.add('selected');
    }

}

let rightarrow = document.getElementById('rightarrow');
rightarrow.addEventListener('click', (e) => {
        let visiblepic = document.querySelector(".shown");
            let picid = visiblepic.id;
            console.log(picid)
            nextpic(picid);
        }
)

let leftarrow = document.getElementById('leftarrow');
leftarrow.addEventListener('click', (e) => {
        let visiblepic = document.querySelector(".shown");
        let picid = visiblepic.id;
        lastpic(picid);
})


for (const cir of circles) {
    cir.addEventListener('click', (e) => {
        let currentcir = document.querySelector('.selected');
        currentcir.classList.remove('selected');
        currentcir.classList.add('default');
        let currentcirid = currentcir.id;
        let curciridnum = currentcirid.replace(/\D/g, "");
        let currentpic = document.getElementById(`${curciridnum}`);
        currentpic.classList.remove('shown');
        currentpic.classList.add('hidden');

        let selectedcir = e.target.parentElement;
        selectedcir.classList.remove('default');
        selectedcir.classList.add('selected');
        console.log(selectedcir);
        let selectedcirid = e.target.parentElement.id;
        let selectedcirnum = selectedcirid.replace(/\D/g, "");
        let selectedpic = document.getElementById(`${selectedcirnum}`);
        selectedpic.classList.remove('hidden');
        selectedpic.classList.add('shown');
        

    })
}

const autoswitch = () => {
    let currentpic = document.querySelector('.shown');
    let picid = currentpic.id;
    nextpic(picid);
}


const itsTimeout = setInterval(autoswitch, 5000);

