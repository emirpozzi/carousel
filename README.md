# My Assumptions

- I used the generic term article for the domain terms but it could be cars, vehicle etc.
- The carousel works by dragging to the left and to the right. The dotted scrollbar in the bottom will show the "position"
- I chose a carousel that is not continous, that might feel a bit less responsive but I feel this solution is more performant since scrolling sends a lot of events per second
- I used useEffect and fetch for data fetching but in a scalable application that should be a combination of React Query, axios and more powerful libraries that can handle retries and error handling better
- For simplicity I put most of CSS in App.css, ideally by using for example Sass these styles could be broken down and code duplication be removed with variables and mixins. Also each component should have its own encapsulated stylesheet.

How to start:

1. Run `yarn` to install the dependencies
2. Run `yarn start`

# REQUIREMENTS: Volvo Cars (Global Online Digital)

## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile

![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using create-react-app.
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you add a filter bar on the top to filter cars by `bodyType`
- If you use our design system component library, [VCC-UI](https://vcc-ui.netlify.app)
