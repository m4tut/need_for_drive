export function getModel(): string {
  const storage = localStorage.getItem('model');

  if (!storage) {
    localStorage.setItem('model', '');
  }

  return storage ? storage : '';
}
