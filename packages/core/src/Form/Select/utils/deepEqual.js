// Helper function for deep comparison of values (handles arrays, objects, and primitives)
const deepEqual = (a, b) => {
  if (a === b) return true
  
  if (a == null || b == null) return a === b
  
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return a.every((item, index) => deepEqual(item, b[index]))
  }
  
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    
    if (keysA.length !== keysB.length) return false
    
    return keysA.every(key => deepEqual(a[key], b[key]))
  }
  
  return false
}

export {
  deepEqual
}
