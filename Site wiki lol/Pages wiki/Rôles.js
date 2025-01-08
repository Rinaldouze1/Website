const button = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
  
    button.addEventListener('click', () => {
        document.body.classList.toggle('t22');
  
        if (document.body.classList.contains('t22')) {
            icon.src = '../Images et video/t2.png';
        }
        else {
            icon.src = '../Images et video/t1.png';
        }
    });