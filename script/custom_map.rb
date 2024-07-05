def custom_map(arr,block)
    arr.collect!(&block)
end

array= lambda {|x| x - 1 }
puts custom_map(arr,&array)
