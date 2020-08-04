let converterButton = document.getElementById('converter_btn')
let refresh = document.getElementById('refresh')

let convert = () =>{
    let tempInput = document.getElementById("temp_input").value
    // tempInput = parseInt(tempInput)
    let f = (tempInput - 32) * 5/9;
    // console.log(f)
    let answer = document.getElementById('answer')
    // answer.append(f.toFixed(2))
    answer.textContent = f.toFixed(2)
}

let ref = () => {
    window.location.reload();
}

converterButton.addEventListener('click', convert)
refresh.addEventListener('click', ref)