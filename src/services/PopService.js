const PopService = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  open(props = {}) {
    document.dispatchEvent(new CustomEvent('open', { detail: { props } }));
  },
};

export default PopService;
