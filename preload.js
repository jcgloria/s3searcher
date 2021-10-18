const Store = require('electron-store');

const store = new Store();

bucket = store.get('bucket')
ak = store.get('ak')
sk = store.get('sk')

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('inputBucket').value = bucket
  document.getElementById('inputAccess').value = ak
  document.getElementById('inputSecret').value = sk
}
)

window.addEventListener('beforeunload', () => {
  store.set('bucket', document.getElementById('inputBucket').value)
  store.set('ak', document.getElementById('inputAccess').value)
  store.set('sk', document.getElementById('inputSecret').value)
})