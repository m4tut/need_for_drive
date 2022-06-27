export function getPointOfIssue(): string {
  const storage = localStorage.getItem('location');
  const storageParse = storage ? JSON.parse(storage) : '';
  return storageParse.point ? storageParse.point : '';
}
