document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const correctQuestions = []; 
    
    document.querySelector('main').addEventListener('click', e => {
        e.preventDefault();
        if(e.target.nodeName != 'LI') return;
        
        const result = document.querySelector('#results');
        const currentSection = e.target.closest('section'); 
        const question = currentSection.querySelector('span').textContent.replace(':', '');
        const answears = {
            'Question #1': 'onclick',
            'Question #2': 'JSON.stringify()',
            'Question #3': 'A programming API for HTML and XML documents'
        };
        
        if(e.target.textContent == answears[question]) {
            correctQuestions.push(question);
        }
        
        const nthChildNumber = Number(question.split('').slice(-1)[0]);
        const sections = document.querySelectorAll('.question');
        
        currentSection.classList.add('hidden');
        
        if(nthChildNumber == 3) {
            if(correctQuestions.length == 3) {
                result.textContent = 'You are recognized as top JavaScript fan!';
            } else if(correctQuestions.length == 0 || correctQuestions.length == 2) {
                result.textContent = `You have ${correctQuestions.length} right answers`;
            } else {
                result.textContent = 'You have 1 right answer'; 
            }
        } else {
            sections[nthChildNumber].classList.remove('hidden');
        }
    });
}