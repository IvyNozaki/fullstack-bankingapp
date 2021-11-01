# PiggyBank

## A fullstack MERN Banking App

---

## **Description**

Interactive banking application that allows you to log in or sign up for a banking profile. From there, you are able to open as many accounts which you can make deposits or withdrawals from. I have created this application to practice how to create a Full Stack application using MERN.

![Homepage default](README-assets/homepage.png)

---

## **Installation Guidelines**

If you would like to copy the application, follow the steps below:

1. Select the Fork button in the top right corner of the github repo.
2. Click on the green Code button.
   - You can either clone the repo via HTTPS or SSH link.
3. Open up your terminal and navigation to where you would like to clone the project.
4. Enter the command "git clone [HTTPS/SSH link]"
   - You should be able to see the project files in the location selected in Step 3.
5. Enter the command "npm install" to install the packages in the package.json.
6. Enter the command "npm start" to start the project.

## **How to run**

The Application features differ depending on state of user:

- **Navigation**
  This is the default homepage navigation upon opening the application.
  ![Homepage Navigation](README-assets/homepage-nav.png)
  and this is the navigation when logged in.
  ![Homepage Navigation for logged in users](README-assets/profile-nav.png)
  You can see that the previous links have been replaced with icons (profile & logout) as well as the username.
  ![Homepage Link](README-assets/homepage-nav-title.png)
  PiggyBank title is the link to the homepage. The homepage is available to logged in users and those not logged in. There is no content changes for the homepage.
- **Signing up**
  Visitors are welcomed to sign up for a user profile. The user profile will allow users to open bank accounts.
  There are 2 ways to sign up from the homepage:

  1. The welcome message card contains a link which will take you to the create profile page.
     ![Homepage "get started" Message](README-assets/homepage-getstarted.png)
     \*as a logged in user this link will take you straight to your profile.
  2. Then there is the Sign up link in the top navigation.
     ![Homepage Navigation Sign Up Link](README-assets/homepage-signup.png)

- **Homepage**
  The homepage has cards to fill the application with content.

  1. First card is the welcome message with the link to "Get started".
     ![Homepage - welcome message](README-assets/welcome-msg.png)

  2. Second card is a inspirational image for content.
     ![Homepage - inspo card](README-assets/promo-img.png)

     - Image changes and quote appears on hover.
       ![Profile - inspo card hover](README-assets/promo-img-hover.png)

  3. Third card contains mini cards of some services the bank offers. The mini cards have a hover interaction as well as links to the service page.
     ![Homepage - Service minicards](README-assets/homepage-service-cards.png)
     - quote appears on mouseover
       ![Profile - Service minicard hover](README-assets/homepage-service-cards-hover.png)
     - `LEARN MORE` buttons take user to the Services page
       ![Service Page](README-assets/services-page.png)

- **Profile Page**
  Upon a successful login/signup, you are welcomed at the profile page.
  ![Profile Page](README-assets/profile-welcome.png)

  - Profile page will have the Total Funds which is the total balance of all accounts.

  There will be section where all the accounts are shown on cards. New users will just have a card to create an account.
  ![Profile - Create Account card](README-assets/profile-newuser.png)
  The create account card is always present no matter how many accounts are opened. This is the only link to the create account page.
  ![Profile - Account cards](README-assets/profile-account-cards.png)
  Account cards have the Account Name, Balance and the `Deposit`, `Withdraw`, `CLOSE Account` buttons.
  ![Profile - Account card](README-assets/account-card.png)
  `CLOSE Account` will take you to the close account page. Users will asked to confirm whether they want to close the account or to go back to their profile page.
  ![Profile - Close Account Page](README-assets/close-acct.png)
  At the bottom of the profile are buttons for the user benefits.
  ![Profile - End Content](README-assets/profile-benefits-buttons.png)

- **Create Account Form**
  `Add Another Account` this is the only link you can return to the `Create Account` page after becoming a user.
  ![Create Account Form](README-assets/create-acct-form.png)
  1. Creating an account starts with defining the account name.
  2. Then you must open that account with a starting balance.
  3. You can click the `Create Account` button to complete the create account process.
  - Upon a successful account creation, user will be taken back to their profile page, where they will now be able to see the account they created.
  4. Clicking the `x` in the top right corner will close the Create Account form and return user to their profile page.

**Account Activity**:
![Profile - Account card](README-assets/account-card.png)

- **Making a Deposit**
  `Deposit` button will take the user to the deposit page. These buttons are the only path to the Deposit page.
  ![Deposit form](README-assets/acct-deposit.png)
- **Making a Withdrawal**
  `Withdraw` button will take the user to the withdraw page. Like the Deposit buttons, these buttons are the only path to the Withdraw page.
  ![Withdrawal form](README-assets/acct-withdrawal.png)
- **Targeting Account for Deposit/Withdraw**
  ![Account Card Logic - IDs](README-assets/acctcard-id.png)
  The Account cards contain the account ids so which is being used to target which account is being passed into the URL path.
  ![Account Card Logic - urls](README-assets/acctcard-code.png)

**Services Page**:

- The services page is just to create content for the banking application. The services are shown on individual cards.
  ![Services page - content](README-assets/servicepage-content.png)
- Each card will have a link. Since this page is strictly for content, the links just open up a "Benefits Information" modal.
  ![Services page - content links](README-assets/benefits-modal-link.png)
  ![Benefits Information Modal](README-assets/service-benefits-modal.png)

- **REVIEWS**
  At the bottom of the homepage, there is a card which contains reviews made by users.
  ![Homepage - reviews](README-assets/reviews.png)
  Only logged in users can make reviews. Link to Review page is located under the user benefits buttons at the bottom of the profile page. This is the only link to the review page.

  ![Review link](README-assets/profile-review-link.png)

  Review form input fields:
  ![Review form](README-assets/review-form.png)

  1. Title of review
  2. Review body
  3. Name

  - top right `x` will close review page and return user back to their profile.

  ![Leaving Review](README-assets/leaving-review.png)
  Review will immediately populate in the homepage reviews card:
  ![Review populated](README-assets/review-populated.png)

**Logout**:
Logout button is only available to users who are logged in. Clicking the logout button will log the user out of their profile and redirect them to the homepage.
![Logout button](README-assets/profile-nav-logout.png)

## **Road Map**

1. Create styling for light and dark modes.
2. Add a light/dark mode toggle switch in the navigation.
3. Create a settings page where users can delete their profile.
4. Add the money transferring feature that is mentioned in the services page.

---

## **Licenses & Technology**

- MIT
- Custom Images and SVGs were created by using Procreate & Affinity Designer
- Images from [Unsplash](https://unsplash.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Gifs created by [Giphy](https://giphy.com/) and [EZGIF](https://ezgif.com)
- HTML
- CSS
- JavaScript
- React
- React Router
