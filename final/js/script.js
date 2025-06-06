function askAnswer() {
    var jokeanswer =document.getElementById('ask-answer');
    var answer = prompt('i dont know what the joke is- do you have an answer?\n because...');
    jokeanswer.innerHTML = 'because '+ answer + '. hehehehe'
}

function first() {
    var firstfavorite = document.getElementById('first');
    var firstimage = document.getElementById('firstimg');
    firstimage.src = 'https://eastsideprep.instructure.com/courses/3510194/files/261762955/preview';
    var firstanswer = 'WEB! its a chill class that doesnt have a high workload and is flexible!';
    firstfavorite.innerHTML = firstanswer
    firstimage.innerHTML = firstimage.src
}

function second() {
    var secondfavorite = document.getElementById('second');
    var secondimage = document.getElementById('secondimg');
    secondimage.src = 'https://eastsideprep.instructure.com/courses/3510169/files/261746621/preview';
    var secondanswer = 'Science! even though it has a lot of homework, the activities are always fun.';
    secondfavorite.innerHTML = secondanswer
    secondimage.innerHTML = secondimage.src
}

function third() {
    var thirdfavorite = document.getElementById('third');
    var thirdimage = document.getElementById('thirdimg');
    thirdimage.src = 'https://eastsideprep.instructure.com/courses/3510145/files/261556581/preview';
    var thirdanswer = 'Lit! The Childrens Book project was really fun but the annotations were pretty strenuous.';
    thirdfavorite.innerHTML = thirdanswer
    thirdimage.innerHTML = thirdimage.src
}

function email() {
    var name = prompt('What\'s my name?');    
    if (name=='pickle'||name=='PICKLE') {
        alert('that\'s correct! my email is... \n dyan@eastsideprep.org')
    }
    else if (name=='') {
        alert('did you even try?')
    }
    else {
        alert('tsk tsk, you don\'t know my name. try again')
    }
}