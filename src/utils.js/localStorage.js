// userHandle ...

export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

// Jeff Data handle

export const setJeffInLocalStorage = (jeff) => {
  localStorage.setItem('jeff', JSON.stringify(jeff))
}

export const getJeffFromLocalStorage = () => {
  const result = localStorage.getItem('jeff')
  const jeff = result && JSON.parse(result)
  return jeff
}

export const removeJeffAllTaskFromLocalStorage = () => {
  localStorage.removeItem('jeff')
}

// ============================

// Wendy Data handle

export const setWendyInLocalStorage = (wendy) => {
  localStorage.setItem('wendy', JSON.stringify(wendy))
}

export const getWendyFromLocalStorage = () => {
  const result = localStorage.getItem('wendy')
  const wendy = result && JSON.parse(result)
  return wendy
}

export const removeWendyAllTaskFromLocalStorage = () => {
  localStorage.removeItem('wendy')
}

// ============================
