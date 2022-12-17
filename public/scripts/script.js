const bookPageContainer = document.querySelector('.book-page-container');
const bookPage = document.querySelector('.book-page');


const bookUsBtn = document.querySelector('.reach span');
const bookUs = document.querySelector('.book-us');
bookUsBtn.addEventListener('click', () => {
    bookUs.style.transform = 'scale(1)'
});


const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
    bookUs.style.transform = 'scale(0)'
});


const page = document.querySelector('#landing-page');
const loadIcon = document.querySelector('.load-icon');
window.addEventListener('load', () => {
	setTimeout(() => {
		loadIcon.style.display = 'none'
		page.style.visibility = 'visible'
	}, 3000)
});

const btn = document.querySelector('.button');
btn.addEventListener('click', (e) => {
btn.classList.toggle('open');
});


const submit1 = document.querySelector('.submit1');
const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
submit1.addEventListener('click', (e) => {
    //  e.preventDefault();
    form1.style.display = 'none'
    form2.style.display = 'block';
    form2.style.left = '0';
});

const back = document.querySelector('.back-btn');
back.addEventListener('click', (e) => {
    e.preventDefault();
    form1.style.display = 'block';
    form2.style.display = 'none';
    submit1.style.marginBottom = '10px';
});

const select = document.querySelectorAll('.select');
const selectContainer = document.querySelectorAll('.select-container');
const serviceContainer = document.querySelectorAll('.service-container');
for(let i = 0; i < serviceContainer.length; i++){
    const input = serviceContainer[i].querySelector('input[type=checkbox]');
    selectContainer[i].addEventListener('click', (e) => {
         input.checked = !input.checked;
        if(input.checked){
            select[i].innerHTML = `Selected`;
            selectContainer[i].style.backgroundColor = 'olive'
        } else {
            select[i].innerHTML = 'Select'
            selectContainer[i].style.backgroundColor = 'transparent'
        }
    })
}


