// ==================== Change navbar style on scroll ====================
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// ==================== FAQ Toggle Logic ====================
const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open')

    // Toggle plus/minus icon
    const icon = faq.querySelector('.faq__icon i')
    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus'
    } else {
      icon.className = 'uil uil-plus'
    }
  })
})


// ==================== Show/hide nav menu (mobile) ====================
const menu = document.querySelector(".nav__menu")
const openBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

// Open menu
openBtn.addEventListener('click', () => {
  menu.classList.add('show') // Use .show class (controlled via CSS)
  openBtn.style.display = "none"
  closeBtn.style.display = "inline-block"
})

// Close menu
closeBtn.addEventListener('click', () => {
  menu.classList.remove('show')
  closeBtn.style.display = "none"
  openBtn.style.display = "inline-block"
})
