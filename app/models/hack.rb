class Hack < ActiveRecord::Base
  attr_accessible :token, :user_id
  validates :token, :user_id, :presence => true
  validates :token, :uniqueness => {:scope => :user_id}

  class << self
    def save_data(hash_string)
      hash_string.gsub!(/^#/,'')
      hash = Rack::Utils.parse_query(hash_string)
      Hack.create(:token => hash["access_token"], :user_id => hash["user_id"])
    end
  end
end
