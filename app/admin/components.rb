ActiveAdmin.register Component do

  active_admin_import  validate: false,
                        csv_options: {col_sep: "," },
                        before_import: ->(importer){ Component.delete_all },
                        # before_batch_import: ->(importer) {
                        #     Component.where(id: importer.values_at('id')).delete_all
                        # }
                        batch_size: 2000

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :list, :of, :attributes, :on, :model, :name, :ancestry, :parent_id, :position, :componenttype_id, 
:component_group_id, :release_priority_id, :goal, :cta, :content_assets, :image, :description, :ispersonalized, 
:personalization_rules, :is_taggable, :tag_groups, :requirements, :data, :invision_link, :image_sizes, 
:interaction_notes, component_items_attributes: [:id, :component_id, :text_item_id, :position, :_destroy, :_update], 
component_types_attributes: [:id, :name, :_update], component_groups_attributes: [:id, :name], release_priorities_attributes: [:id, :name],
:tag_ids => [], tag_mappings_attributes: [:id, :tag_id, :component_id, :order, :destroy]

# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

menu parent: 'Content Model', priority: 1

index do
  column :id do |cid|
    cid.id
  end
  column :name do |component|
    link_to component.name, admin_component_path(component)
  end
  column :component_group do |cg|
    cg.component_group
  end

  actions
end
# filter only by title
filter :name

show do |component|
  attributes_table do
    row :text_items do |component|
      component.text_items.map { |d| d.name }.join("&nbsp;&nbsp;>&nbsp;&nbsp;").html_safe
    end
  end
end

form do |f|
  f.semantic_errors *f.object.errors.keys
  f.inputs "Component" do
    f.input :name
    f.input :component_group_id, :label => 'Component Group', :as => :select, :collection => ComponentGroup.all.map{|g| ["#{g.name}", g.id, include_blank: true]}
    f.input :release_priority_id, :label => 'Release Priority', :as => :select, :collection => ReleasePriority.all.map{|h| ["#{h.name}", h.id, include_blank: true]}
    f.input :parent_id, :label => 'Parent ID', :as => :select, :collection => Component.all.map{|u| ["#{u.name}", u.id, include_blank: true]}    
    f.input :image, :label => 'Image'
    f.input :invision_link, :label => 'Invision Link'
    f.input :image_sizes
    f.input :full_width, :label => 'Full-Width?', as: :boolean
    f.input :personalization_rules, :label => 'Personalization Rules'
    f.input :goal
    f.input :cta
    f.input :requirements, :label => 'Requirements'
    f.input :data, :label => 'Data'
    # , :input_html => { :class => 'tinymce' }
    f.input :allowed_controls, :label => 'Allowed Controls'
    f.input :dev_notes, :label => 'Dev Notes'
    f.input :interaction_notes, :label => 'Interaction Notes'
    # , :input_html => { :class => 'tinymce' }

    f.inputs "Tags" do
        f.has_many :tag_mappings, sortable: :order, sortable_start: 1 do |deg|
          deg.input :tag
          deg.input :_destroy, :as => :boolean, :label => "Remove?"
        end
    end

  f.inputs "Text Items" do
    f.has_many  :component_items, sortable: :position, sortable_start: 1 do |deg|
      deg.input :text_item
      deg.input :_destroy, :as => :boolean, :label => "Remove?"
      end
    end
  end
  f.actions
end

end
