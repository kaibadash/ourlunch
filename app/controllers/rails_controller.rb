class RailsController < ApplicationController
  before_action :set_rail, only: [:show, :edit, :update, :destroy]

  # GET /rails
  # GET /rails.json
  def index
    @rails = Rail.all
  end

  # GET /rails/1
  # GET /rails/1.json
  def show
  end

  # GET /rails/new
  def new
    @rail = Rail.new
  end

  # GET /rails/1/edit
  def edit
  end

  # POST /rails
  # POST /rails.json
  def create
    @rail = Rail.new(rail_params)

    respond_to do |format|
      if @rail.save
        format.html { redirect_to @rail, notice: 'Rail was successfully created.' }
        format.json { render :show, status: :created, location: @rail }
      else
        format.html { render :new }
        format.json { render json: @rail.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rails/1
  # PATCH/PUT /rails/1.json
  def update
    respond_to do |format|
      if @rail.update(rail_params)
        format.html { redirect_to @rail, notice: 'Rail was successfully updated.' }
        format.json { render :show, status: :ok, location: @rail }
      else
        format.html { render :edit }
        format.json { render json: @rail.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rails/1
  # DELETE /rails/1.json
  def destroy
    @rail.destroy
    respond_to do |format|
      format.html { redirect_to rails_url, notice: 'Rail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rail
      @rail = Rail.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rail_params
      params.require(:rail).permit(:g, :model, :restaurant, :name, :postal_code, :city, :addr, :tel, :lat, :lon, :point, :url, :image_url)
    end
end
