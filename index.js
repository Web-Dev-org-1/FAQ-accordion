function func(params,img_id){
    const element = document.querySelector(params);
    const img_element = document.querySelector(img_id);
    console.log(element);
    // element.style.display = 'block';
    console.log('CLicked');
    if(element.style.display === 'block')
    {
        img_element.src = './assets/images/icon-plus.svg';
        element.style.display = 'none';
    }
    else{
        element.style.display = 'block';
        img_element.src = './assets/images/icon-minus.svg';

    }
}