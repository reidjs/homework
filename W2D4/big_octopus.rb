fishes = ['fish', 'fiiish', 'fiiiiiiiiiiiiiiiiiiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']



class Array
  def sluggish_octopus
    i = 0
    longest_index = nil
    while i < self.length
      is_longest = true
      j = 0
      while j < self.length
        if i == j
          j += 1
          next
        end
        if self[i].length < self[j].length
          is_longest = false
        end
        j += 1
      end
      longest_index = i if is_longest
      i += 1
    end
    self[longest_index]
  end

  def dominant_octopus
    prc = Proc.new { |a, b| b.length <=> a.length }
    Array.merge_sort(self, &prc)
  end

  # NB: In Ruby, shift is an O(1) operation. This is not true of all languages.
  def self.merge(left, right, &prc)
    merged_array = []
    prc = Proc.new { |num1, num2| num1 <=> num2 } unless block_given?
    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged_array << left.shift
      when 0
        merged_array << left.shift
      when 1
        merged_array << right.shift
      end
    end

    merged_array + left + right
  end

  def self.merge_sort (array, &prc)
    return array if array.length <= 1

    mid_idx = array.length / 2
    merge(
      merge_sort(array.take(mid_idx), &prc),
      merge_sort(array.drop(mid_idx), &prc),
      &prc
    )
  end

  def clever_octopus

    longest_idx = 0
    i = 0
    longest_length = self[i].length
    while i < self.length
      if self[i].length > longest_length
        longest_idx = i
        longest_length = self[i].length
      end
      i += 1
    end
    self[longest_idx]
  end
end

p fishes.sluggish_octopus
p fishes.dominant_octopus.first
p fishes.clever_octopus

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, tiles_array)
  tiles_array.each_index do |i|
    return i if tiles_array[i] == dir
  end
end

p slow_dance("up", tiles_array)

new_tiles_data_structure = {}

tiles_array.each_with_index do |value, idx|
  new_tiles_data_structure[value] = idx
end

def fast_dance(dir, new_tiles_data_structure)
  new_tiles_data_structure[dir]
end

p fast_dance("right-down", new_tiles_data_structure)
