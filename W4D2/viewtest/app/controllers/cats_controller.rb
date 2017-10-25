class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find_by(id: params[:id])
    if @cat
      render :show
    else
      redirect_to cats_url
    end
  end

  def new
    @cat = Cat.new #send nil value to form
    render :new
  end

  def edit
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def update
    @cat = Cat.find_by(id: params[:id])
    if @cat.update_attributes(cat_params)
      redirect_to cats_url(@cat)
    else
      render :edit
    end
  end

  def create
    # debugger
    @cat = Cat.new(cat_params)
    if @cat.save
      #show user the cat show page
      redirect_to cats_url(@cat) #automatically extracts the ID
    else
      #show user the new cat form
      render :new
    end
    # render json: "Creating cat"
  end

  private

  def cat_params
    params.require(:cat).permit(:name, :color)
  end
end
