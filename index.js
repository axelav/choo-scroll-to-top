module.exports = function scrollToTop (state, emitter) {
  emitter.on(state.events.NAVIGATE, function () {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  })
}
