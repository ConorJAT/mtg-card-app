# mtg-card-app
A personal utility app project, intended to allow users to properly catalogue and keep track of Magic: The Gathering cards in their collection, decks and bulk.

# Application Road Map:

## Card Collection
  - Build functional server base -> Allow cards to be added and removed from memory.
      - **STRETCH GOAL**: Cards added will be be specified based on specific print. This will allow a significantly more accurate calculation of the user's card collection.
   
## Deck Building
  - Add deckbuilding feature (create/delete decks, add/remove cards from deck, etc)
      - Cards that users add to their decks will first pull from their personal collection if they have the card added.
      - If they add a card they do not own, the card will still be added to the deck, with a black/white version of the card, notifying that the card is not present in their collection
          - **Idea**: Prompt the user with cheapest printings and where they can go to buy that print online.
      - If a card that was once unowned in deck becomes owned, the app will automatically update the first deck that has that instance of said card.
          - **Idea**: Add a priority feature to allow users to decide which decks should add newly owned cards first.'
          - **Idea**: When a new card becomes owned AND if multiple decks have that same card, prompt the user which deck they would want to add that card to (if they want).
      - **STRETCH GOAL**: Use cases to test for card legality, quantity legality, game changers, etc.

## Owning an Account
  - Add account feature (Allow users to create accounts to save their card/deck information. Account can be deleted at user's discretion).

## Bulk Collection
  - Add bulk feature -> At the user's discretion, they may decide to set a value for any excess prints of a card to be added to bulk.
      - The bulk will be a separate data structure that will NOT be used when it comes to building decks but will fill the collection as cards are pulled from the collection to build decks.
      - Example: I own 6 copies of Austere Command. I set my collection limit to 4 copies per print -> 4 copies will be present in the collection, 2 will be sent to bulk.
      - Same Example: I build a deck that uses a copy of Austere Command -> collection goes to 3. In this circumstance, the app will take one copy from the bulk to "refill" the collection -> 4 copies in collection, 1 copy in bulk.
          - **STRETCH GOAL**: Allow a toggle that let's users decide if they want the "collection refill" feature to occur.
       
## Data Storage and Server Hosting
  - Account and collection information will be stored as strings/queries via MongoDB or PostgreSQL (undecided)
      - To save space on storage, storage will be in the form of queries, which can later be used to query Scryfall and then display information as needed.
  - When a build is ready to be hosted, it will be hosted on Heroku.
      - **STRETCH GOAL**: Use Reddis as a way to keep track of user sessions.
      - **Note**: Subscriptions for any aforementioned services may be expired. See Prof. Willoghby for guidance if such instance occurs.

## Neatness and Display
  - To provide a pleasant and easy-to-approach user experience, will either use React Components or custom CSS (undecided).

# Deadline:
Should have a working build with all necessary components and functionality by **August 20th, 2026**.
