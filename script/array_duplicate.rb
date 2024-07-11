def duplicated_values(values)
    num=Hash.new(0)
    values.each do |x|
      num[x] += 1
    end
    frequency = num.select { |key, value| value > 1}
    return frequency
end


  arr = [5,10,15,5,15,10,25]
  puts duplicated_values(arr)
  

  
 