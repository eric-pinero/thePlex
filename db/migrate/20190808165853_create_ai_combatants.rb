class CreateAiCombatants < ActiveRecord::Migration[5.2]
  def change
    create_table :ai_combatants do |t|
      t.string :name, null: false
      t.integer :hp, null: false
      t.integer :atk, null: false
      t.integer :def, null: false
    end
  end
end
