const getParentElementId = (element, type) => {
  const parent = element.closest(type);
  return parent.id;
};

export default getParentElementId;
