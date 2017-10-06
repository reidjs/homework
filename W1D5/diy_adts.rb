class Stack
  def initialize
    # create ivar to store stack here!
    @stack = []
  end

  def add(el)
    # adds an element to the stack
    @stack << el
  end

  def remove
    # removes one element from the stack
    @stack.pop
  end

  def show
    # return a copy of the stack
    @stack
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue
  end
end

class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    idx = lookup(key)
    if idx.nil?
      @map << [key, value]
    else
      @map[idx][1] = value
    end

  end
  #returns index of key
  def lookup(key)
    @map.each_index do |i|
      return i if @map[i][0] == key
    end
    nil
  end

  def remove(key)
    idx = lookup(key)
    return nil if idx.nil?
    @map = @map[0...idx] + @map[idx+1...@map.length]
  end

  def show
    @map
  end

end

x = Map.new
x.assign(1, 2)
x.assign(3, 4)
x.assign(3, 5)
x.assign(2, 5)
x.assign(1, 5)
x.remove(1)
p x.show
# x = Queue.new
# x.enqueue(5)
# x.enqueue(35)
# x.enqueue(35)
#
# x.dequeue
# p x.show
