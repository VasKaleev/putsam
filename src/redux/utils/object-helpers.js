// export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
//   items.map((u) => {
//     if (u[objPropName] === itemId) {
//       return { ...u, ...newObjProps };
//     }
//     return u;
//   });
// };
// В файле object-helpers.js
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  // Добавляем проверку на существование items
  if (!items || !Array.isArray(items)) {
    return items || [];
  }

  return items.map((item) => {
    if (item[objPropName] === itemId) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};
