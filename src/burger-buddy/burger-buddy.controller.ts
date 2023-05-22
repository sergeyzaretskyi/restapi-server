import { Controller, Get } from '@nestjs/common';

@Controller('burgerbuddy/api')
export class BurgerBuddyController {
  @Get('burgers')
  getBurgers(): object {
    return {
      menu: {
        All: [],
        Hamburger: [
          {
            slug: 'classic-hamburger',
            title: 'Classic Hamburger',
            imageUrl: '/img/burgers/classic-hamburger.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: false,
            price: 8.99,
            rating: 10,
          },
          {
            slug: 'bacon-hamburger',
            title: 'Bacon Hamburger',
            imageUrl: '/img/burgers/bacon-hamburger.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: 'hot',
            price: 10.99,
            rating: 8,
          },
          {
            slug: 'double-hamburger',
            title: 'Double Hamburger',
            imageUrl: '/img/burgers/double-hamburger.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: false,
            price: 12.99,
            rating: 9,
          },
        ],
        Cheeseburger: [
          {
            slug: 'classic-cheeseburger',
            title: 'Classic Cheeseburger',
            imageUrl: '/img/burgers/classic-cheeseburger.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: false,
            price: 9.99,
            rating: 10,
          },
          {
            slug: 'bacon-cheeseburger',
            title: 'Bacon Cheeseburger',
            imageUrl: '/img/burgers/bacon-cheeseburger.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: false,
            price: 11.99,
            rating: 9,
          },
          {
            slug: 'double-cheeseburger',
            title: 'Double Cheeseburger',
            imageUrl: '/img/burgers/double-cheeseburger.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: 'new',
            price: 13.99,
            rating: 10,
          },
        ],
        Veggie: [
          {
            slug: 'classic-veggie',
            title: 'Classic Veggie Burger',
            imageUrl: '/img/burgers/classic-veggie.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: false,
            price: 7.99,
            rating: 8,
          },
          {
            slug: 'bacon-veggie',
            title: 'Bacon Veggie Burger',
            imageUrl: '/img/burgers/bacon-veggie.jpg',
            bunOptions: ['Regular', 'Bunless'],
            label: false,
            price: 9.99,
            rating: 7,
          },
        ],
        Chicken: [],
        BBQ: [],
        Bacon: [],
        Mushroom: [],
        Turkey: [],
        Slider: [],
        Steak: [],
        Lamb: [],
        Hawaiian: [],
      },
    };
  }
}
