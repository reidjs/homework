class UserMailer < ApplicationMailer
  default from: 'reid@reid.com'

  def welcome_email(user)
    @user = user
    mail(to: 'reidsherman@gmail.com', subject: 'Hello!')
  end
end
