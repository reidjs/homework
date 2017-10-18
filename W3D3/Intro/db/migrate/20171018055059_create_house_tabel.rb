class CreateHouseTabel < ActiveRecord::Migration[5.1]
  def change
    create_table :house_tabels do |t|
      t.string :adress, null: false
      t.timestamps
    end
  end
end
