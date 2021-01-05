class User < ApplicationRecord
    after_initialize do |user|
        user.session_token ||= SecureRandom::urlsafe_base64
    end


    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
end



