Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "pages#show", page: "home"

  get  '/component/:id', to: 'pages#component', as: 'component'
  get  '/components/', to: 'pages#components', as: 'components'
  get  '/contentmapping', to: 'pages#contentmapping'
  get  '/engagementvalue', to: 'pages#engagementvalue'
  get  '/engagementvaluedetail/:id', to: 'pages#engagementvaluedetail', as: 'engagementvaluedetail'
  get  '/home', to: 'pages#home'
  get  '/flows', to: 'pages#flows'
  get  '/flowdetail/:id', to: 'pages#flowdetail', as: 'flowdetail'
  get  '/iframe', to: 'pages#iframe', as: 'iframe'
  get  '/legacysites', to: 'pages#legacysites'
  get  '/legacysitedetail/:id', to: 'pages#legacysitedetail', as: 'legacysitedetail'
  get  '/messaging', to: 'pages#messaging'
  get  '/messagingdetail/:id', to: 'pages#messagingdetail', as: 'messagingdetail'
  get  '/personachart/', to: 'pages#personachart', as: 'personachart'
  get  '/page/:id', to: 'pages#page', as: 'page'
  get   "/pages/:page" => "pages#show"
  resources :priority
  get  '/review', to: 'pages#review'
  get  '/roadmap', to: 'pages#roadmap'
  get  '/searchtest', to: 'pages#searchtest'
  resources :search, only: [:index]
  resources :site_crawl
  get  '/sitemap', to: 'pages#sitemap'
  get  '/sitemapdetail/:id', to: 'pages#sitemapdetail', as: 'sitemapdetail'
  resources :sitepage
  get  '/smart_listing/' => 'smart_listing#index'
  get  '/taxonomy', to: 'pages#taxonomy'
  get  '/taxonomysite/:id', to: 'pages#taxonomysite', as: 'taxonomysite'
  get  '/templates', to: 'pages#templates'
  get  '/templatedetail/:id', to: 'pages#templatedetail', as: 'templatedetail'
  get  '/templatelist/:id', to: 'pages#templatelist', as: 'templatelist'
  resources :text_item
  get 'tree/' => 'tree#index'
  get 'tree/data', :defaults => { :format => 'json' }
  get 'tree/dollywoodtags', :defaults => { :format => 'json' }
  get 'tree/naqtags', :defaults => { :format => 'json' }
  get 'tree/dollywoodmap', :defaults => { :format => 'json' }
  get 'tree/naqmap', :defaults => { :format => 'json' }
  get  '/visualdesign', to: 'pages#viz_home'
  get  '/visualdesign/principles', to: 'pages#viz_principles'
  get  '/visualdesign/grid', to: 'pages#viz_grid'
  get  '/visualdesign/components', to: 'pages#viz_components'
  get  '/visualdesign/dw/typography', to: 'pages#viz_dw_typography'
  get  '/visualdesign/dw/photography', to: 'pages#viz_dw_photography'
  get  '/visualdesign/dw/components/hero', to: 'pages#viz_dw_components_hero'
  get  '/visualdesign/dw/components/navigation', to: 'pages#viz_dw_components_navigation'
  get  '/visualdesign/dw/components/actionbar', to: 'pages#viz_dw_components_actionbar'
  get  '/visualdesign/dw/components/footer', to: 'pages#viz_dw_components_footer'
  get  '/visualdesign/dw/components/socialgrid', to: 'pages#viz_dw_components_socialgrid'
  get  '/visualdesign/dw/components/introtext', to: 'pages#viz_dw_components_introtext'
  get  '/visualdesign/dw/components/textvariants', to: 'pages#viz_dw_components_textvariants'
  get  '/visualdesign/dw/components/promopanel', to: 'pages#viz_dw_components_promopanel'
  get  '/visualdesign/dw/components/imagepromo', to: 'pages#viz_dw_components_imagepromo'
  get  '/visualdesign/dw/components/offsetcarousel', to: 'pages#viz_dw_components_offsetcarousel'
  get  '/visualdesign/dw/components/flexcarousel', to: 'pages#viz_dw_components_flexcarousel'
  get  '/visualdesign/dw/components/cardcollection', to: 'pages#viz_dw_components_cardcollection'
  get  '/visualdesign/dw/components/attractionsearch', to: 'pages#viz_dw_components_attractionsearch'
  get  '/visualdesign/dw/components/productlisting', to: 'pages#viz_dw_components_productlisting'
  get  '/visualdesign/dw/components/hovercollage', to: 'pages#viz_dw_components_hovercollage'
  get  '/visualdesign/dw/components/calendar', to: 'pages#viz_dw_components_calendar'
  get  '/visualdesign/dw/components/eventlisting', to: 'pages#viz_dw_components_eventlisting'
  get  '/visualdesign/dw/components/forms', to: 'pages#viz_dw_components_forms'
  get  '/visualdesign/dw/components/colors', to: 'pages#viz_dw_components_colors'
  get  '/visualdesign/dw/components/icons', to: 'pages#viz_dw_components_icons'
  get  '/visualdesign/dw/components/buttonstyles', to: 'pages#viz_dw_components_buttonstyles'
  get  '/visualdesign/naq/typography', to: 'pages#viz_naq_typography'
  get  '/visualdesign/naq/photography', to: 'pages#viz_naq_photography'
  get  '/visualdesign/naq/components/hero', to: 'pages#viz_naq_components_hero'
  get  '/visualdesign/naq/components/navigation', to: 'pages#viz_naq_components_navigation'
  get  '/visualdesign/naq/components/actionbar', to: 'pages#viz_naq_components_actionbar'
  get  '/visualdesign/naq/components/footer', to: 'pages#viz_naq_components_footer'
  get  '/visualdesign/naq/components/socialgrid', to: 'pages#viz_naq_components_socialgrid'
  get  '/visualdesign/naq/components/introtext', to: 'pages#viz_naq_components_introtext'
  get  '/visualdesign/naq/components/textvariants', to: 'pages#viz_naq_components_textvariants'
  get  '/visualdesign/naq/components/promopanel', to: 'pages#viz_naq_components_promopanel'
  get  '/visualdesign/naq/components/imagepromo', to: 'pages#viz_naq_components_imagepromo'
  get  '/visualdesign/naq/components/offsetcarousel', to: 'pages#viz_naq_components_offsetcarousel'
  get  '/visualdesign/naq/components/flexcarousel', to: 'pages#viz_naq_components_flexcarousel'
  get  '/visualdesign/naq/components/cardcollection', to: 'pages#viz_naq_components_cardcollection'
  get  '/visualdesign/naq/components/attractionsearch', to: 'pages#viz_naq_components_attractionsearch'
  get  '/visualdesign/naq/components/productlisting', to: 'pages#viz_naq_components_productlisting'
  get  '/visualdesign/naq/components/hovercollage', to: 'pages#viz_naq_components_hovercollage'
  get  '/visualdesign/naq/components/calendar', to: 'pages#viz_naq_components_calendar'
  get  '/visualdesign/naq/components/eventlisting', to: 'pages#viz_naq_components_eventlisting'
  get  '/visualdesign/naq/components/forms', to: 'pages#viz_naq_components_forms'
  get  '/visualdesign/naq/components/colors', to: 'pages#viz_naq_components_colors'
  get  '/visualdesign/naq/components/icons', to: 'pages#viz_naq_components_icons'
  get  '/visualdesign/naq/components/buttonstyles', to: 'pages#viz_naq_components_buttonstyles'
  get  '/api/v1/tag/data', :defaults => { :format => 'json' }
  get  '/webfootprint', to: 'pages#webfootprint'
  get '/ds-benefits', to: 'pages#ds-benefits', as: 'dsbenefits'
  #api
  namespace :api do
    namespace :v1 do
      # resources :sessions, only: [:create, :show]
      resources :tag, only: [:index, :create, :show, :update, :destroy] do
        post :activate, on: :collection
        # resource :feed, only: [:show]
      end
    end
  end

end
