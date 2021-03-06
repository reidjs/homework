class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user
  def current_user
    return nil unless session[:session_token]
    @current_user ||=  User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    return nil unless session[:session_token]
    session[:session_token] = nil
  end

  def logged_in?
    # debugger
    return false unless session[:session_token].nil?
    true
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def require_logged_out
    redirect_to current_user if logged_in?
  end
end
