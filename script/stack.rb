class Stack
    def initialize
      @stack = []
    end
    
    def pop
      @stack.pop
    end
    
    def push(element)
      @stack.push(element)
      self
    end

    def peek
      @stack.last
    end
    
  end
  
  stack = Stack.new
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  puts stack.pop  
  puts stack.peek  
  