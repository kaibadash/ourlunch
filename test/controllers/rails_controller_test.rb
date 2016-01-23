require 'test_helper'

class RailsControllerTest < ActionController::TestCase
  setup do
    @rail = rails(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:rails)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create rail" do
    assert_difference('Rail.count') do
      post :create, rail: { addr: @rail.addr, city: @rail.city, g: @rail.g, image_url: @rail.image_url, lat: @rail.lat, lon: @rail.lon, model: @rail.model, name: @rail.name, point: @rail.point, postal_code: @rail.postal_code, restaurant: @rail.restaurant, tel: @rail.tel, url: @rail.url }
    end

    assert_redirected_to rail_path(assigns(:rail))
  end

  test "should show rail" do
    get :show, id: @rail
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @rail
    assert_response :success
  end

  test "should update rail" do
    patch :update, id: @rail, rail: { addr: @rail.addr, city: @rail.city, g: @rail.g, image_url: @rail.image_url, lat: @rail.lat, lon: @rail.lon, model: @rail.model, name: @rail.name, point: @rail.point, postal_code: @rail.postal_code, restaurant: @rail.restaurant, tel: @rail.tel, url: @rail.url }
    assert_redirected_to rail_path(assigns(:rail))
  end

  test "should destroy rail" do
    assert_difference('Rail.count', -1) do
      delete :destroy, id: @rail
    end

    assert_redirected_to rails_path
  end
end
