const stepContainer = document.querySelector('.progress-bar')
const steps = document.querySelectorAll('.steps')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

console.log(stepContainer)
    

prevBtn.addEventListener('click', e => {
    let numberOfIndexes = steps.length - 1
    nextBtn.classList.remove('btn-disabled')

    for (numberOfIndexes; numberOfIndexes > 0; numberOfIndexes--) {
        let step = steps[numberOfIndexes]
        
        if(numberOfIndexes === 1) prevBtn.classList.add('btn-disabled')
        
        if(step.classList.contains('step-abled')) {
            step.classList.remove('step-abled')
            break
        }
    }
})

nextBtn.addEventListener('click', e => {
    prevBtn.classList.remove('btn-disabled')  

    for (let step of steps) {
        if(!step.classList.contains('step-abled')) {
            step.classList.add('step-abled')

            if(step.id === 'step4') nextBtn.classList.add('btn-disabled')

            break
        }
    }
})