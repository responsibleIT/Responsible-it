let activeFilters = []

function filter () {
  activeFilters = []
  document.querySelectorAll('input[name="filter"]:checked').forEach((el) => activeFilters.push(el.value))

  if (activeFilters.length === 0) {
    document.querySelectorAll('.article').forEach((el) => { el.style.display = 'block' })
  } else {
    document.querySelectorAll('.article').forEach((el) => { el.style.display = 'none' })
    for (let i = 0; i < activeFilters.length; i++) {
      document.querySelectorAll(`.${activeFilters[i]}`).forEach((el) => { el.style.display = 'block' })
    }
  }
}
document.querySelectorAll('.filter').forEach((el) => el.addEventListener('click', filter))
filter()
