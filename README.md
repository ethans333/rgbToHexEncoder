# Rgb To Hexadecimal Encoder 🎨
Algorithm for converting RGB values to their corresponding hexadecimal values.

## Code Breakdown
```javascript
function rgb(r, g, b){  
  const getHex = int => {
    let a = int / 16, rem = a;
      
    while (rem > 1) {
      rem -= 1;
    }

    a -= rem;
      
    (rem != 0) && (rem = rem * 16)
```
Divide the integer by ```16``` and then calculate its remainder.
If remainder does not equal zero then multiply the remainder by 16.
This should always return a whole number.

```javascript
    let symbol = '';
    
    const hexMap = int => {
      const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      return (int < hexValues.length && int >= 0) ? (int = hexValues[int].toString()) : (int > hexValues.length ? int = 'FF' : int = '0')
    };
    
    (a > 15 || a < 0) ? (symbol = hexMap(a)) : (symbol = hexMap(a) + hexMap(rem)) 
    
    return symbol;
  }
  
  console.log(getHex(r) , getHex(g) , getHex(b))
  
  return `#${getHex(r) + getHex(g) + getHex(b)}`;
}
```
Create an empty ```symbol``` string. Map the whole number and remainder,
which has been multiplied by 16 to their corresponding hexadecimal value.
At this point ```a``` and ```rem``` should be between 1 and 16. Under the condition
that ```a``` or ```rem``` is < 0 or > 16 map round their value to the largest or
smallest hexadecimal value. Concat the symbol of ```a``` and ```rem```. If the sum of
```a``` and ```rem``` was ever > 16 ```symbol = 'FF'``` or if the sum was ever < 0 then
```symbol = '00'```, their corresponding rounded value.

## Terminal Returns: 🤖
```
rgb(173,255,47) => #ADFF2F
```
## Notes 🤔
This was a kata exercise on codewars. I've always wondered how hex values work and now I know!
I tried using ternary operators (```(condition) ? true : false```) for the first time too. The
script for this project is in the repository's files. Thanks!
