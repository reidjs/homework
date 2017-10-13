

class LRUCache

  def initialize(limit=4)
    @data = HashMap.new(limit)
    #element => time

  end

  def count
    # returns number of elements currently in cache
  end

  def add(el)
    # adds element to cache according to LRU principle
    #add to head remove from tail
    @data.insert(el)
  end

  def show
    # shows the items in the cache, with the LRU item first
    @data
  end

  private
  # helper methods go here!

end
class HashMap
  #all nodes point to each other in the hash
  def initialize(limit)
    @hash = Hash.new { DoublyLinkedList.new }
  end
  # def [](key)
  #   # @hash[key]
  # end
  # def []=(key, value)
  #   @hash[key] = value
  # end
  def insert(el)
    t = Node.new(el.hash, el)

    @hash[el.hash].add_node_to_head(t)
  end
  def eject

  end
  def delete

  end
end

class DoublyLinkedList
  def initialize
    @head_sentinel = Node.new
    @tail_sentinel = Node.new
  end

  def head
    @head_sentinel.next
  end

  def tail
    @tail_sentinel.prev
  end
  #dont use on sentinels@!!!
  def remove_node(node)
    node.prev.next = node.next
    node.next.prev = node.prev
  end

  def add_node_to_head(node)
    node.next = head.next
    @head_sentinel.next = node

  end

  def remove_rear_node
    remove_node(tail)
  end


end

class Node
  attr_accessor :prev, :next, :val, :key
  def initialize(key = nil, val = nil, prev_node = nil, next_node = nil)
    @val = val
    @key = key
    @prev = prev_node
    @next = next_node
  end

end
johnny_cache = LRUCache.new(4)
johnny_cache.add("I walk the line")
johnny_cache.add(5)
p johnny_cache.show

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
