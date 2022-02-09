const profile = document.querySelector('.profile')
const shareIcon = document.querySelectorAll('.share-icon')
const share = document.querySelector('.share')
const css = window.document.styleSheets[0];

console.log(share);
const setDefaultShareStatus = _ => {
        share.style.animation = 'shrink 0.25s'
}

const setActiveShareStatus = _ => {
        share.style.animation = 'expand-bounce 0.25s'
}

// animation-name: expand-bounce;
// animation-duration: 0.25s;

shareIcon.forEach((i) => {
  i.addEventListener('click', () => {
    //add toggle class to set from default to active by toggling active status
    if (!profile.classList.contains('active')) {
      profile.classList.add('active')
      setActiveShareStatus()
    } else {
        profile.classList.remove('active')
        setDefaultShareStatus()
    }
  })
})

