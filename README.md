<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A mobile app that optimizes bus routes in Lebanon by organizing the bus's movement, reducing wait times, and improving transportation services. 

### User Stories
- As a new user, I want to be able to register for an account so that I can access the app's features and functionalities.
- As a user, I want to be able to log in to my account using my email and password so that I can access my personalized data.
- As a passenger, I want to be able to search for available trips and reserve a seat on a particular bus, so that I can plan my travel in advance.
- As a passenger, I want to be able to view all my current reserved trips, so that I dont forgot my trips.
- As a passenger, I want to be able to view all my finished trips, so that I have records my trips.
- As a passenger, I want to be able to track the live location of the bus driver, so that I can estimate the arrival time and prepare for my trip.
- As a bus driver, I want to be able to add a trip, so that passengers can reserve.
- As a bus driver, I want to be able to view all my current trips, so that I dont be late.
- As a bus driver, I want to be able to view all my finished trips, so that I have records my trips.
- As an admin, I want to be able to view real-time information about both the users, so that I can monitor the system's performance.
- As an admin, I want to be able to approve registered drivers, so that unofficial driver cant work.
- As an admin, I want to be able to delete users, so that I ensure that the app services are working without problems

<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed BussBoss using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login screen  | PreRegister screen |  Passenger Register | Driver Register |
| ---| ---| ---| ---|
| ![Landing](./readme/wireframes/login.svg) | ![fsdaf](./readme/wireframes/PreRegister.svg) | ![fsdaf](./readme/wireframes/PassengerRegister.svg) | ![fsdaf](./readme/wireframes/DriverRegister.svg)|

| Passenger Main  | Bus Schedule |  Current Trips | All Trips |
| ---| ---| ---| ---|
| ![Landing](./readme/wireframes/PassengerMain.svg) | ![fsdaf](./readme/wireframes/busSchedule.svg) | ![fsdaf](./readme/wireframes/CurrentTrips.svg) | ![fsdaf](./readme/wireframes/AllTrips.svg)|

| Driver Main  | Add Trip |  All Trips | 
| ---| ---| ---| 
| ![Landing](./readme/wireframes/DriverMain.svg) | ![fsdaf](./readme/wireframes/AddTrip.svg) | ![fsdaf](./readme/wireframes/DriverAllTrips.svg) | 

| Admin Passengers  | Admin Drivers | 
| ---| ---|
| ![Landing](./readme/wireframes/Admin_passengers.svg) | ![fsdaf](./readme/wireframes/Admin_drivers.svg) |

### Mockups
| Login screen  | PreRegister screen |  Passenger Register | Driver Register |
| ---| ---| ---| ---|
| ![Landing](./readme/mockups/login.svg) | ![fsdaf](./readme/mockups/PreRegister.svg) | ![fsdaf](./readme/mockups/PassengerRegister.svg) | ![fsdaf](./readme/mockups/DriverRegister.svg)|

| Passenger Main  | Bus Schedule |  Current Trips | All Trips |
| ---| ---| ---| ---|
| ![Landing](./readme/mockups/PassengerMain.svg) | ![fsdaf](./readme/mockups/BussSchedule.svg) | ![fsdaf](./readme/mockups/CurrentTrips.svg) |![fsdaf](./readme/mockups/AllTrips.svg)|

| Driver Main  | Add Trip |  All Trips | 
| ---| ---| ---| 
| ![Landing](./readme/mockups/DriverMain.svg) | ![fsdaf](./readme/mockups/AddTrip.svg) | ![fsdaf](./readme/mockups/DriverAllTrips.svg) | 

| Admin Passengers  | Admin Drivers | 
| ---| ---|
| ![Landing](./readme/mockups/adminPassengers.svg) | ![fsdaf](./readme/mockups/adminDriver.svg) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the BussBoss app with the following features:

### User Screens (Mobile)
| Login screen  | Register screen | Landing screen | Loading screen |
| ---| ---| ---| ---|
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |
| Home screen  | Menu Screen | Order Screen | Checkout Screen |
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |

### Admin Screens (Web)
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Coffee Express is built using the following technologies:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Coffee Express locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Coffee Express locally and explore its features.
