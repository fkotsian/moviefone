export async function loadMovies(func, stateCallback) {
  try {
    this.setState({ loading: true })
    const res = await func()
    stateCallback(res)
  } catch (err) {
    console.log("Err")
    console.log(err)
  }
  this.setState({
    loading: false,
  })
}

export function infiniteScroll(func) {
  const pxFromBottom = (
    document.documentElement.scrollHeight -
    document.documentElement.scrollTop -
    window.innerHeight
  )

  if (pxFromBottom <= 500) {
    func()
  }
}
