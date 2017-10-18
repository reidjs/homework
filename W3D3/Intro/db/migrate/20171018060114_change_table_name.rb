class ChangeTableName < ActiveRecord::Migration[5.1]
  def change
    drop_table :house_tabels
  end
end
