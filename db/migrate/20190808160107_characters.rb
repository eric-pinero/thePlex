class Characters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.integer :brawn, null: false
      t.integer :brains, null: false
      t.integer :knack, null: false
      t.integer :armor_id
      t.integer :weapon_id
    end
    add_index :characters, :user_id
    add_index :characters, :armor_id
    add_index :characters, :weapon_id
  end
end
