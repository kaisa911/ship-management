export default (path) => {
  const realPath = `../../pages/${path}`;
  const modules = import.meta.glob('../../pages/**');
  return modules[realPath];
};
