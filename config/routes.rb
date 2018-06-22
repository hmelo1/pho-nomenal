Rails.application.routes.draw do
  scope '/api' do
    resources :recipes
  end
end
