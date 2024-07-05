factorial=lambda do |num|
    fact=1
    if num == 0
        puts "Do not enter zero"
    else
      count =1 
      while(count <= num)
        fact = fact * count
        count += 1
      end
      puts "factorial of #{num} is #{fact}"
    end
end


number=gets.chomp.to_i
factorial.call(number)