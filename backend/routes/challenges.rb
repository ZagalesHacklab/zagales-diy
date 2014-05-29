

class ZagalesApi < Sinatra::Base
  get '/api/challenges' do
    content_type :json
    challenges = Challenge.all
    challenges.to_json
  end

  post '/api/challenges' do
    content_type :json
    challenge = Challenge.create(params[:challenge])
    challenge.to_json
  end

end
