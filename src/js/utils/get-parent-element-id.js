const getParentElement = (element, type) => {
  const parent = element.closest(type);
  return parent;
};

export default getParentElement;
