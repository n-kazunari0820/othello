const board = document.getElementById("board")
let count = 0

function maleblack(masu){
    masu.textContent = '●'
    masu.classList.add('black')
}

function malewhite(masu){
    masu.textContent = '●'
    masu.classList.add('white')
}


for (let i = 0; i < 64; i++) {
    const masu = document.createElement('div')

    if(i===27||i===36){
        maleblack(masu)
    }else if(i===28||i===35){
        malewhite(masu)
    }else{
        masu.addEventListener('click', () => {
            if(count%2===0){
                maleblack(masu)
            }else{
               malewhite(masu)
            }
            count++
        },{
            once:true
        })
    }
    
  
    board.append(masu)
}


