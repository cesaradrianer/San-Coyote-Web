const toggleLink = document.getElementById('toggle-link')
const mainContainer = document.getElementById('main-container')
const containers = document.querySelectorAll('.container')
const subContainers = document.querySelectorAll('.sub-container')
const logo = document.getElementById('sancoyote-logo')
const logoContainer = document.getElementById('logo-container')
const textTags = document.getElementsByClassName('text')

toggleLink.onclick = () => {

    if (!document.body.classList.contains('dark-theme')) {
        
        document.body.classList.toggle('dark-theme')
        toggleLink.innerHTML = '<p><i class="fa-regular fa-sun"></i>modo ligero</p>'

    } else {

        document.body.classList.toggle('dark-theme')
        toggleLink.innerHTML = '<p><i class="fa-solid fa-moon"></i>modo oscuro</p>'

    }

    

}
