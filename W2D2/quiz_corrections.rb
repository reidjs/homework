#Count all instances of words in a dictionary from within another word
#I think I missed this one because I was messing up on the indexing
str = "panama"
dict = ["a", "an", "am", "pan", "panama"]

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
