class TreeController < ApplicationController
  def index
  end

  def dollywoodtags
    @tags = Tag.for_dollywood.arrange
    respond_to do |format|
      format.json {
        render :json =>  Tag.json_tree(@tags)
      }
    end
  end

  def dollywoodmap
    @pages = Page.for_dollywood.arrange(:order => :name)
    respond_to do |format|
      format.json {
        render :json =>  Page.json_tree(@pages)
      }
    end
  end

  def naqtags
    @tags = Tag.for_naq.arrange
    respond_to do |format|
      format.json {
        render :json =>  Tag.json_tree(@tags)
      }
    end
  end

  def naqmap
    @pages = Page.for_naq.arrange(:order => :name)
    respond_to do |format|
      format.json {
        render :json =>  Page.json_tree(@pages)
      }
    end
  end


  def data
    @tags = Tag.joins( :site_tag_mappings ).where( site_tag_mappings: { site_id: 1 }).arrange
    respond_to do |format|
      format.json {
        render :json =>  Tag.json_tree(@tags)
      }
    end
  end

end
