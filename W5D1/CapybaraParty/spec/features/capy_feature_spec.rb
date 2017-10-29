require 'rails_helper'

feature "capybara features", type: :feature do
  feature "making a new capybara" do
    # before(:each) do
    #   visit "/capys/new"
    # end

    scenario "with invalid params" do
      # fill_in "name", with: "anya"
      # click_on "Create Capy"
      save_and_open_page
      sign_up_capy("anya", nil)
      expect(current_path).to eq("/capys")
      expect(page).to have_content("Color can't be blank")
    end


    scenario "with valid params" do
      # visit "/capys/new"
      # fill_in "name", with: "anya"
      # fill_in "color", with: "yellow"
      # click_on "Create Capy"
      sign_up_capy("anya", "yellow")
      expect(page).to have_content("anya")
      expect(current_path).to eq("/capys/#{Capy.find_by(name: 'anya').id}")
    end
  end
end
