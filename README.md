# Songs

## Demo Site → [YouTube Videos](http://xboudsady-react-songs.s3-website-us-west-1.amazonaws.com)

A simple React + Redux applicationd design to demonstrate how they both work together. One of the newer cocept is using the Redux Store, to handle most of the state change, whereas with React, the state was handled by the component.

## Technology
* JS Framework - [React](https://reactjs.org/)
* State Management - [Redux](https://redux.js.org)
* Redux Binding - [React Redux](https://github.com/reduxjs/react-redux)
* CSS Framework - [Semantic UI](https://semantic-ui.com/)
* Hosted - [Amazon Web Services](https://https://aws.amazon.com/)

## Build Process

### Component Design

![Component Design](https://github.com/xboudsady/songs/blob/master/src/assets/songs-components.png)

The two main comonent in the Apps is the 
* `<SongList />` - Which will render the avaialable song in our data store.
* `<SongDetail />` - Once a song is selected, the details of the song from the data store will be rendered. 

However, since the component will not be holding our state properties, we'll be using the Redux Library, to with a data store to hold our state, and the changes that is made.

### Folder Structure Layout

![Folder Layout](https://github.com/xboudsady/songs/blob/master/src/assets/with-redux-4.png)

We create the following folder structure to hold different modular code.
* `actions` - Will hold all our code, use to request changes to the store
* `components` - Will hold our React components.
* `reducers` - The reduer will hold our intial data store, along with processing the request of the action.

### Architecture Layout

![Component Hiearchy](https://github.com/xboudsady/songs/blob/master/src/assets/with-redux-1.png)

The component hiearchy is very simliar to a React App. On the right side, is the react component setup with a root component, the `<App />`, with two child component `<SongList />` and `<SongDetail />`.

The left side, is the Redux component setup. Consisting of the `Action Creator`, and `Reducers`. The `Action Creator` will hold our method call to make to `Reducers`, which will then process the request accordingly based on the action `type`, along with it's `payload`.

### Redux State Cycle

![Redux State Cycle](https://github.com/xboudsady/songs/blob/master/src/assets/with-redux-3.png)

A Store is created, in the `./src/index.js` directory, which is calling on the reducers method in the folder `./src/reducers/index.js`. The reducer interacts with the store, handling the requst from the `Action Creator`, to update the store.

In order for the root `<App />` component to interact with the store, request needs to be pass to the `reducers` via an `<Provider />` component. We **wrap** the `<App />` component with the `<Provider />` component with the prop `store`.

Then, in each of our React component, we pass the current props from the store, down to the child components of `<App />`. The component can subsribe the the state in the `store` by using the `connect` function, and passing the `mapStateToProps` to receive prop update.


