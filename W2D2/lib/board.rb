require 'byebug'
class Board
  attr_accessor :cups
  BUCKETS = { 6 => "name1", 13 => "name2"}
  def initialize(name1, name2)
    @cups = Array.new(14) {[:stone] * 4}
    BUCKETS[6] = name1
    BUCKETS[13] = name2
    empty!(6)
    empty!(13)

  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    # i = 0
    # while i < @cups.length
    #   @cups[i] = 4
    #   i += 1
    # end

  end

  def valid_move?(start_pos)
    if start_pos >= 15 || start_pos <= 0
      raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    i = 0
    numstones = @cups[start_pos].length
    empty!(start_pos)
    while numstones > 0

      # index = (start_pos + i) % (@cups.length)
      # p index
      idx = next_cup_index(start_pos + i)
      if idx == 6 && BUCKETS[6] != current_player_name
        p "skipping"
      elsif idx == 13 && BUCKETS[13] != current_player_name
        p "skipping"
      else
        @cups[idx] << :stone
        numstones -= 1
      end
      i += 1
      # p "#{index} #{@cups[index]}"
      # p @cups[index].length
      # @cups[index] << :stone
    end
    render
    # :switch
      # @cups[start_pos + i]
  end

  def next_cup_index(current_idx)
    (current_idx + 1) % (@cups.length)
  end

  def empty!(pos)
    @cups[pos] = []
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end

class Array

end
