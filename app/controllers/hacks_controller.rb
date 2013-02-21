class HacksController < ApplicationController
  def show
  end

  def create
    hash_string = params[:hash]
    Hack.save_data(hash_string) if hash_string
    render :text => ''
  end
end
