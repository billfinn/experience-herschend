ActiveAdmin.register LegacySite do
  active_admin_import  validate: false,
                            csv_options: {col_sep: "," },
                            before_import: ->(importer){ LegacySite.delete_all },
                            batch_size: 1000
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :list, :of, :attributes, :on, :model, :name, :url, :domain_authority, :traffic, :referring_domains

menu parent: 'Sites & Flow'
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
