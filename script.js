const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const weight=document.querySelector('#weight').value;
    const height=document.querySelector('#height').value;
    const results=document.querySelector('.result');
    const category=document.querySelector('.category');
    
    if(weight===''||weight<0)
    results.innerHTML='Please give a valid weight';
    else if(height===''||height<0)
    results.innerHTML='Please give a valid height';
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`${bmi}`;
        switch(true){
            case(bmi<18.6):
            category.innerHTML="Underweight";
            break;

            case(bmi>=18.6&&bmi<=24.9):
            category.innerHTML="Normal";
            break;

            case(bmi>24.9):
            category.innerHTML="Overweight";
            break;
        }
    }

    
})