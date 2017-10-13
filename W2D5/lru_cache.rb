

class LRUCache

  def initialize(limit)
    @data = HashMap.new
    #element => time

  end

  def count
    # returns number of elements currently in cache
  end

  def add(el)
    # adds element to cache according to LRU principle
    #add to head remove from tail
    @hash[el]
  end

  def show
    # shows the items in the cache, with the LRU item first
    @head
  end

  private
  # helper methods go here!

end

class HashMap
  def initialize
    @hash = {}
  end
  def [](key)
    @hash[key]
  end
  def []=(key, value)
    @hash[key] = value
  end
  def insert

  end
  def eject

  end
  def delete

  end 
end

class LinkedList
  def initialize
    @head_sentinel = Node.new
    @tail_sentinel = Node.new
  end
  #dont use on sentinels@!!!
  def remove_node(node)
    node.prev.next = node.next
    node.next.prev = node.prev
  end
end

class Node
  attr_accessor :prev, :next, :val
  def initialize(val=nil, prev_node = nil, next_node = nil)
    @val = val
    @prev = prev_node
    @next = next_node
  end

end
  johnny_cache = LRUCache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)

  johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})


  johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
