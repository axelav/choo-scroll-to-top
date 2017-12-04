module.exports = function scrollToTop (state, emitter) {
  emitter.on('DOMContentLoaded', () => {
    emitter.on(state.events.NAVIGATE, () => {
      window.scrollTo(0, 0)
    })
  })
}
