import { reactive } from "vue"
import axios from "axios"

export const state = reactive(
  {
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cards: [],
    numberOfCards: null,
    startingCard: 0,
    types: [],
    
    getNumberOfCards(apiToFetch) {
      axios
      .get(apiToFetch)
      .then(response => {
        console.log(response.data);
        this.numberOfCards = response.data.data.length;
        this.startingCard = this.generateFisrtCard(this.numberOfCards);
        this.fetchCardsToUse(this.startingCard, this.apiUrl);
        console.log(this.startingCard);
      })
      .catch(error => {
        console.error(error.message);
      })
    },
    
    generateFisrtCard(totalCards) {
      const startingCard = Math.floor(Math.random() * ((totalCards - 50) + 1));
      return startingCard;
    },
   
    fetchCardsToUse(number, api) {
      axios.get(`${api}?num=50&offset=${number}`)
      .then(response => {
        this.cards = response.data.data;
        this.retrieveArchetypes(this.cards);
        console.log(this.cards);
      })
      .catch(error => {
        console.error(error.message);
      })
    },
    retrieveArchetypes(cards) {
      cards.forEach(card => {
        if(!this.types.includes(card.type)) {
          this.types.push(card.type)
        }
      })
      console.log(this.types);
    }
  }
)