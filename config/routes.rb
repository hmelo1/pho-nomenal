Rails.application.routes.draw do
  scope '/api' do
    resources :recipes do
        get 'addLikes', to: 'recipes#addLikes'
    end
    resources :reviews


  end

  get '*path', to: "application#fallback_index_html", constraints: -> (request) do
    !request.xhr? && request.format.html?
  end

end