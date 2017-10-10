#Count all instances of words in a dictionary from within another word
#I think I missed this one because I was messing up on the indexing
str = "panama"
dict = ["a", "an", "am", "pan", "panama"]
#my failing retry:
def get_word_count(dict, str)
  words = []
  i = 0
  while i < str.length
    j = i + 1
    puts "#{i}, #{j}"
    puts str[i,j]
    while j < str.length
      j += 1
    end
    i += 1
  end
  p words

end

get_word_count(str, dict)

answer = {"a" => 1, "am" => 1, "pan" => 1, "an" => 1, "panama" => 1}


# So I asked on slack and got a response:
# def subword_counts(dictionary)
#     hsh = Hash.new(0)
#
#     self.chars.each_index do |i|
#       self.chars.each_index do |j|
#         hsh[self[i..j]] += 1 if dictionary.include?(self[i..j])
#       end
#     end
#     hsh
#   end

#I now see that I can set a default hash to store the counts, then
#index using each_index.
#I suspected self.chars.each_index would cause problems, but I suppose it
#doesn't. Now I know.
