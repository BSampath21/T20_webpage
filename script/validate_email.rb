def validate_email(email)
    if email.match?('[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})')
        true
    else
        false
    end
end

mail=gets.chomp
puts validate_email(mail)