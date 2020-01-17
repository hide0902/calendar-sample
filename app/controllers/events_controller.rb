class EventsController < ApplicationController
  def index
    @events = Event.all
    @users = User.all
  end

  def new
  end
end
