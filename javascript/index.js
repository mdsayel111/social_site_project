
const slidebar = document.getElementsByClassName("menu-item")

const massageicon = document.getElementById("massageicon")

const massages = document.querySelector(".massages")

const massage = document.querySelectorAll(".massage")

const massagesearch = document.querySelector("#massage-search")

const themicon = document.querySelector(".theme")

const customizethememode = document.querySelector(".customize-them")

const bodyelement = document.querySelector("body")

const choosefonsize = document.querySelectorAll(".choose-size span")

const choosecolor = document.querySelector(".choose-color")
console.log(typeof choosefonsize)

const colorbtn = document.querySelectorAll(".choose-color span")

const choosebackground = document.querySelector(".choose-bg")

const backgroundbtn = document.querySelectorAll(".choose-bg div")






const removeActiveClass=(element)=>{
    for(let i= 0; i<element.length; i++){
        element[i].classList.remove("active")
    }
}

function addActiveClass(){
    massages.style.boxShadow = "0 0 0 0"
    removeActiveClass(slidebar)
    this.classList.add("active")
}

for(i = 0 ;  i<slidebar.length ; i++){ 
    
    slidebar[i].addEventListener("click", addActiveClass)
}

massageicon.addEventListener("click", function(){
    removeActiveClass(slidebar)
    this.classList.add("active")
    massages.style.boxShadow = "0 0 1rem var(--color-primary)"
})



massagesearch.addEventListener("keyup" , ()=>{

    massage.forEach(singlemassageitem =>{
        let value = singlemassageitem.querySelector("h5").innerHTML
        if(value.toLowerCase().indexOf(massagesearch.value.toLowerCase()) != -1){
            singlemassageitem.style.display = "flex"
        }else{
            singlemassageitem.style.display = "none"
        }
    })
    
})


function openThemMode(){
    customizethememode.style.display = "grid"
}


themicon.addEventListener("click", openThemMode)

customizethememode.addEventListener("click", ()=>{
    customizethememode.style.display = "none"
})


choosefonsize.forEach(item => {
    let fontsize;
    item.addEventListener("click", function(){
        var fontsizeclass = document.querySelector(".choose-size").children
        if(this.classList.contains("font-size-1")){
            removeActiveClass(fontsizeclass)
            this.classList.add("active")
            fontsize = "10px"
        }else if(this.classList.contains("font-size-2")){
            fontsize = "13px"
            removeActiveClass(fontsizeclass)
            this.classList.add("active")
        }else if(this.classList.contains("font-size-3")){
            removeActiveClass(fontsizeclass)
            this.classList.add("active")
            fontsize = "16px"
        } else if(this.classList.contains("font-size-4")){
            removeActiveClass(fontsizeclass)
            this.classList.add("active")
            fontsize = "19px"
        } else if(this.classList.contains("font-size-5")){
            removeActiveClass(fontsizeclass)
            this.classList.add("active")
            fontsize = "22px"
        } 
        document.querySelector("html").style.fontSize = fontsize
    })
})

colorbtn.forEach(item => {
    let color;
    item.addEventListener("click", function(){
        var textcolor = choosecolor.children
        if(this.classList.contains("color-1")){
            removeActiveClass(textcolor)
            this.classList.add("active")
            color = "var(--color-primary)"
        }else if(this.classList.contains("color-2")){
            color = "rgb(255, 252, 59)"
            removeActiveClass(textcolor)
            this.classList.add("active")
        }else if(this.classList.contains("color-3")){
            removeActiveClass(textcolor)
            this.classList.add("active")
            color = "rgb(209, 3, 106)"
        } else if(this.classList.contains("color-4")){
            removeActiveClass(textcolor)
            this.classList.add("active")
            color = "rgb(37, 255, 109)"
        } else if(this.classList.contains("color-5")){
            removeActiveClass(textcolor)
            this.classList.add("active")
            color = "rgb(0, 231, 200)"
        }
        document.querySelector(":root").style.setProperty("--color-primary", color)
    })
})

backgroundbtn.forEach(item => {
    let backgroundcolor;
    let color;
    let divbackgroundcolor;
    item.addEventListener("click", function(){
        var textcolor = choosebackground.children
        if(this.classList.contains("bg-1")){
            removeActiveClass(textcolor)
            this.classList.add("active")
            backgroundcolor = "white"
            color = "black"
            
        }else if(this.classList.contains("bg-2")){
            backgroundcolor = "hsl(254, 30%, 17%)"
            removeActiveClass(textcolor)
            this.classList.add("active")
            color = "white"
            divbackgroundcolor = "rgb(57 52 76)"
        }else if(this.classList.contains("bg-3")){
            removeActiveClass(textcolor)
            this.classList.add("active")
            backgroundcolor = "hsl(254, 30%, 10%)"
            color = "white"
            divbackgroundcolor = "rgb(15 12 26)"
        }
        document.querySelector("body").style.backgroundColor = backgroundcolor
        document.querySelector(":root").style.setProperty("--color-dark", color)
        document.querySelector(":root").style.setProperty("--color-background",divbackgroundcolor)


    })
})