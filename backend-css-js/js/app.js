const dropdown = () => {
  const _variables = {
    main: "vsb-dropdown",
    menu: "vsb-dropdown__menu",
    target: "data-dropdown-target",
    active: "vsb-active",
  }

  const dropDown = [...document.querySelectorAll(`.${_variables.main}`)]

  const closeDropdowns = () => {
    dropDown.forEach(drop => {
      const targetId = drop.querySelector(`[${_variables.target}]`).getAttribute(_variables.target)
      const menu = document.querySelector(`#${targetId}`)
      if (menu) menu.classList.remove(_variables.active)
    })
  }

  document.addEventListener("click", (vsb) => {
    const target = vsb.target.closest(`.${_variables.main}`)
    const targetedMenu = vsb.target.closest(`.${_variables.menu}`)

    if (!target && !targetedMenu) {
      closeDropdowns()
      return
    }

    if (target && !targetedMenu) {
      const targetId = target.querySelector(`[${_variables.target}]`).getAttribute(_variables.target)
      const activeMenu = document.querySelector(`#${targetId}`)

      const nonTargeted = dropDown.map(drop => {
        const nonActiveId = drop.querySelector(`[${_variables.target}]`).getAttribute(_variables.target)
        const nonActive = document.querySelector(`#${nonActiveId}`)
        return nonActive
      })

      const filterExceptActive = nonTargeted.filter(target => target !== activeMenu)

      filterExceptActive.forEach(drop => drop.classList.remove(_variables.active))

      if (activeMenu) activeMenu.classList.toggle(_variables.active)
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDropdowns()
    }
  })
}

dropdown()
//# sourceMappingURL=app.js.map
