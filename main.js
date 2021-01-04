function rgb(r, g, b){  
  const getHex = int => {
    let a = int / 16, rem = a;
      
    while (rem > 1) {
      rem -= 1;
    }
      
    a -= rem;
      
    (rem != 0) && (rem = rem * 16)
    
    let symbol = '';
    
    const hexMap = int => {
      const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      return (int < hexValues.length && int >= 0) ? (int = hexValues[int].toString()) : (int > hexValues.length ? int = 'FF' : int = '0')
    };
    
    (a > 15 || a < 0) ? (symbol = hexMap(a)) : (symbol = hexMap(a) + hexMap(rem)) 
    
    return symbol;
  }
  
  console.log(`#${getHex(r) + getHex(g) + getHex(b)}`)
  return `#${getHex(r) + getHex(g) + getHex(b)}`;
}
