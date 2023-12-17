import TheRestaurantDbSource from '../../data/therestodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">CARI MAKAN</h2>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
