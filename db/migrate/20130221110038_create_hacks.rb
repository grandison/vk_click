class CreateHacks < ActiveRecord::Migration
  def change
    create_table :hacks do |t|
      t.string :token
      t.integer :user_id

      t.timestamps
    end
  end
end
