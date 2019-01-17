ActiveAdmin.register Priority do

    active_admin_import  validate: false,
    csv_options: {col_sep: "," },
    before_import: ->(importer){ Priority.delete_all },
    # before_batch_import: ->(importer) {
    #     Component.where(id: importer.values_at('id')).delete_all
    # }
    batch_size: 2000

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :list, :of, :attributes, :on, :model, :name, :color, :intent_id, :goal, :action, :components, :customervalue, :businessvalue, :personalizaitonopportunities
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

menu parent: 'Content Model', priority: 8

form do |f|
    f.semantic_errors *f.object.errors.keys
    f.inputs "Priority" do
      f.input :name
      f.input :intent_id, :label => 'Intent', :as => :select, :collection => Intent.all.map{|g| ["#{g.name}", g.id, include_blank: true]}
      f.input :goal
      f.input :action
      f.input :components
      f.input :customervalue, :label => 'Customer Value'
      f.input :businessvalue, :label => 'Business Value'
      f.input :personalizaitonopportunities, :label => 'Personalization Opportunities'
      f.input :color, :label => 'Color'
    # f.inputs "Components" do
    #   f.has_many  :component_items, sortable: :position, sortable_start: 1 do |deg|
    #     deg.input :text_item
    #     deg.input :_destroy, :as => :boolean, :label => "Remove?"
    #     end
    #   end
    end
    f.actions
  end


end
