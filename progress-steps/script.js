const progressBar = document.querySelector('.step-container')
const steps = document.querySelectorAll('.steps')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const progressClasses = ['progress-bar', 'progress-bar-start', 'progress-bar-mid', 'progress-bar-end']    

function increaseProgress(index) {
    let newClass = progressClasses[index]
    let oldClass = progressBar.classList[1]
    progressBar.classList.replace(oldClass, newClass)
}

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
            console.log(step.id)
            increaseProgress(Number(step.id))

            if(step.id === '3') nextBtn.classList.add('btn-disabled')

            break
        }
    }
})