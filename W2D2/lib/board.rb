require 'byebug'
class Board
  attr_accessor :cups
  def initialize(name1, name2)
    @cups = Array.new(14) {[:stone] * 4}
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
    i = 1
    numstones = @cups[start_pos].length
    empty!(start_pos)
    while i <= numstones

      index = (start_pos + i) % (@cups.length)
      p index
      # p "#{index} #{@cups[index]}"
      # p @cups[index].length
      @cups[index] << :stone
      i += 1
    end
    render
    next_turn(index - 1)
    p @cups[index]
    return :switch if @cups[index - 1].empty?
    :switch
      # @cups[start_pos + i]
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
