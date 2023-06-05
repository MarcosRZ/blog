export const formatDate = (date: Date) => { 
  
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
};