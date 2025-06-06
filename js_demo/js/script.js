alert('the script is working YIPPEEE');

function askName() {
    var nameReturn =document.getElementById('ask-name');
    var name = prompt('WHATS YOUR NAME?','HERE');
    if (name == ''||name == 'HERE'){
        alert('thats incorrect. TRY AGAIN');
    } else {
        nameReturn.innerHTML = 'hello ' + name + '!'
    }
}

function askQuestion() {
    var p = prompt('What\'s a letter in the alphabet?');
    var validLetters = ['a', 'b', 'e', 'h', 'l', 'p', 't'];
    
    if (!validLetters.includes(p)) {
        document.getElementById('question').innerHTML = 'nope, ' + p + ' is not a letter in THE ALPHABET. TRY AGAIN.';
    } else {
        document.getElementById('question').innerHTML = 'hmmm, ' + p + '. that\'s a very interesting letter. lots of words with it...';
    }
}