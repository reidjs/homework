class CreateHouseTables < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :adress, null: false
      t.timestamps
    end
  end
end
