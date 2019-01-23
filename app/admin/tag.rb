ActiveAdmin.register Tag do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#

permit_params :list, :of, :attributes, :on, :model, :name , :description, :ancestry, :parent_id, :site_ids => [ ], site_tag_mappings_attributes: [:id, :site_id, :tag_id, :destroy]


menu parent: 'Messaging', priority: 0





# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

form do |f|
  f.inputs do
    f.input :name
    f.input :site_ids, as: :check_boxes, collection: Site.all.map{|site| [site.name, site.id]}
    f.input :parent_id, :label => 'Parent ID', :as => :select, :collection => Tag.all.map{|t| ["#{t.name}", t.id, include_blank: true]}
    f.input :description
  end
  f.actions
end

end
