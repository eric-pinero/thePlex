# == Schema Information
#
# Table name: characters
#
#  id        :bigint           not null, primary key
#  user_id   :integer          not null
#  name      :string           not null
#  brawn     :integer          not null
#  brains    :integer          not null
#  knack     :integer          not null
#  armor_id  :integer
#  weapon_id :integer
#

class Character < ApplicationRecord
end
