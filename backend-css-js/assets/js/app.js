const operateNavigations = (type, target, variables) => {

    let componentId = type === "dropdown" ? variables.target : variables.targetId;
  
    const targetId = type === "dropdown" ? target.querySelector(`[${componentId}]`).getAttribute(componentId) : target.getAttribute(componentId)
  
    const activeMenu = document.querySelector(`#${targetId}`)
  
    const nonTargeted = variables.components.map(drop => {
      const nonActiveId = drop.querySelector(`[${componentId}]`).getAttribute(componentId)
      const nonActive = document.querySelector(`#${nonActiveId}`)
  
      return nonActive
    })
  
    const filterExceptActive = nonTargeted.filter(target => target !== activeMenu)
  
    filterExceptActive.forEach(drop => drop.classList.remove(variables.active))
  
    if (activeMenu) activeMenu.classList.toggle(variables.active)
  
  }
  
  // Fechando componentes
  const closeComponents = (type, event, variables) => {
  
    const target = type === "dropdown" ? event.target.closest(`.${variables.menu}`) || event.target.closest(`[${variables.target}]`) : event.target.closest(`.${variables.menu}`) || event.target.closest(`.${variables.target}`)
  
    if (target) return
  
    variables.components.forEach(comp => {
      const menu = comp.querySelector(`.${variables.menu}`)
      if (menu.classList.contains(variables.active)) menu.classList.remove(variables.active)
    })
  
  }
  
  const dropdown = () => {
    const _variables = {
      main: "vsb-dropdown",
      menu: "vsb-dropdown__menu",
      target: "data-dropdown-target",
      active: "vsb-active",
      components: [...document.querySelectorAll(`.vsb-dropdown`)]
    }
  
    document.addEventListener("click", (vsb) => {
  
      const target = vsb.target.closest(`.${_variables.main}`)
  
      const targetedMenu = vsb.target.closest(`.${_variables.menu}`)
  
      if (!target || targetedMenu) return
  
      vsb.preventDefault()
  
      operateNavigations("dropdown", target, _variables);
  
    })
  
    window.addEventListener("mouseup", vsb => {
  
      closeComponents("dropdown", vsb, _variables);
  
    })
  
  }
  
  dropdown()