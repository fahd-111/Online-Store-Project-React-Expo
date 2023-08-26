import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ProductType',
      title: 'Product Type',
      type: 'string',
      options:{
        list: [
          {title: 'Sneaker', value: 'Sneaker'},
          {title: 'Formal shoes', value: 'FormalShoes'},
          {title: 'Sport Shoes', value: 'Sport Shoes'},
          {title: 'Peshawari Chappal', value: 'PeshawariChappal'},
          {title: 'Sunglasses', value: 'Sunglasses'},
          {title: 'Necklaces', value: 'Necklaces'},
          {title: 'Watches', value: 'Watches'},
          {title: 'T-Shirt', value: 'T-Shirt'},
          {title: 'Casual Shirts', value:'CasualShirts'}

        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name:'description',
      Title:'Description',
      type:'string'
    }),
    defineField({
      name:'shortDescription',
      Title:'short Description',
      type:'string'
    }),
    defineField({
      name:'price',
      title:'Price',
      type:'number',
      description: 'The price of the product in Pkr',
      validation: (Rule) => Rule.required().positive(),
      options:{
        format: 'currency',
      }
    }),
  
  ],
})
