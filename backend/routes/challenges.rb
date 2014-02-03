

class ZagalesApi < Sinatra::Base
  before do
   content_type :json    
    #headers 'Access-Control-Allow-Origin' => 'http://localhost:9000', 
    headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST'] 
    end
  get '/api/challenges' do
    content_type :json

    challenge1 =Challenge.new()
    challenge1.name = 'pepe'

    challenge1.save!

    challenge2 = Challenge.new()
    challenge2.name = 'lolo'

    challenges = []
    challenges.push(challenge1)
    challenges.push(challenge2)

    challenges.to_json
  end
end