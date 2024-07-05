def max_number(num1, num2, num3, num4)
  max_value = num1 > num2 ? (num1 > num3 ? (num1 > num4 ? num1 : num4) : 
  (num3> num4 ? num3 : num4)) : 
  (num2 > num3 ? (num2 > num4 ? num2 : num4) : 
  (num3 > num4 ? num3 : num4))
  result = 'This is the code to find maximum value among four numbers, this has
  to be correct efficiently following all code standards, you can rewrite the
  logic or modify the existing code but do not use simplified methods, write raw
  logic'
end 
