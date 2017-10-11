require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  # let(:chef) { double("reid") }
  let(:dessert) do
     Dessert.new("Pastry", 1, :chef)
  end
  let(:mistake) do
    Dessert.new("Ice Cream", "5", :chef)
  end

  let(:chef) { double("chef") }

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to eq("Pastry")

    end
    it "sets a quantity" do
      expect(dessert.quantity).to eq(1)
    end
    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to be_empty
    end
    #
    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("Ice Cream", "5", :chef) }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      orig_ingredients = dessert.ingredients.length
      dessert.add_ingredient("Whipped Cream")
      expect(dessert.ingredients.length).to be > orig_ingredients
    end
  end
  #
  describe "#mix!" do
    it "shuffles the ingredient array" do
      ["sugar", "eggs", "cream", "lard", "flour"].each do |ing|
        dessert.add_ingredient(ing)
      end
      orig_ingredients = ["sugar", "eggs", "cream", "lard", "flour"]
      dessert.mix!
      expect(dessert.ingredients).not_to eq(orig_ingredients)
    end
  end
  #
  describe "#eat" do
    it "subtracts an amount from the quantity" do
      orig_amount = dessert.quantity
      dessert.eat(1)
      expect(dessert.quantity).to be < orig_amount
    end

  #
    it "raises an error if the amount is greater than the quantity" do
      expect{dessert.eat(400)}.to raise_error
    end
  end
  #
  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return(String)
      # expect(dessert.serve).to
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      allow(chef).to receive(:bake).with(:dessert)
    end 
  end
end
