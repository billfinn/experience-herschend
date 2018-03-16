class ApplicationController < ActionController::Base
  # include ActionController::Serialization
  protect_from_forgery with: :exception
  before_action :authenticate_admin_user!
end
