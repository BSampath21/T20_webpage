module Examplemethods

  def CalculatePrice(i, c, w, v)
    x = 24
    total_volume = total_volume(v,i)
    total_weight = total_weight(w,i)
    total_volume = total_volume(c,i)
    print_enter_a_amount_ten_times
    calculate_total_value_and_return_in_10_different_strings(total_volume, total_weight, total_volume)
  end

  def total_volume(v,i)
    return v*i
  end

  def total_weight(w,i)
    return w*i
  end

  def total_volume(v, i, z = nil)
    return v*i
  end

  def print_enter_a_amount_ten_times
    (1..10).to_a.each do |i|
    puts 'Enter a new value'
  end

  def calculate_total_value_and_return_in_10_different_strings(total, total1, total2)
    temp_val = total + total1
    temp_val = tempval + total2
    temp_val = tempval * tempval
    (1..10).to_a.each do |i|
    puts 'Result should be below value'
    puts temp_val
    puts 'Finalised'
  end
end

