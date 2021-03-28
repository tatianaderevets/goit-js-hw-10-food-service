const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

    const bodyRef = document.querySelector('body');
    const switcherRef = document.querySelector('#theme-switch-toggle')


switcherRef.checked = localStorage.getItem('theme') === Theme.DARK

console.log(Theme);

const saveSettings = localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme')
bodyRef.classList.add(saveSettings)

const changeClass = (add, rem) => {
bodyRef.classList.remove(rem)
        bodyRef.classList.add(add)
        localStorage.setItem('theme',add)
}
    

switcherRef.addEventListener('change', ({target}) => {
    console.dir(target);
    if (target.checked) {
        changeClass(Theme.DARK,Theme.LIGHT)
        

    }
    else {
        changeClass(Theme.LIGHT,Theme.DARK)
    }
    

    
})
