
require 'rails_helper'


feature "the signup process" do
  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content "New user"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'Email', :with => "testemail@gmail.com"
      fill_in 'password', :with => "password"
      # save_and_open_page
      click_on "Create User"
    end

    scenario "redirects to bands index page after signup" do
      # visit bands_url
      expect(page).to have_content "Bands index"
    end
  end

  feature "with an invalid user" do
    before(:each) do
      visit new_user_url
      fill_in 'Email', :with => 'testemail@gmail.com'
      click_on "Create User"
    end

    scenario "re-renders the signup page after failed signup"
  end
end
