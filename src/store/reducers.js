const initialState={
    tickets:[{
        owner:"Lufy",
        subject:"Pirates",
        status:"Closed",
        email:"test@getDefaultNormalizer.com",
        product:"Ship",
        account:"Gum Gum",
        des:"Gonna be the king of pirate",
        id:100,
        days:5
      },
      {
        owner:"Itachi",
        subject:"Uchiha",
        status:"Open",
        email:"test@getDefaultNormalizer.com",
        product:"Genjutsu",
        account:"Amatarasu",
        des:"Clan or Village",
        id:101,
        days:1
      }]
}
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TICKET':
        return {
          ...state,
          tickets: [...state.tickets, action.payload],
        };
      case 'DELETE_TICKET':
          return {
            ...state,
            tickets: state.tickets.filter(ticket => ticket.id !== action.payload),
        };
      case 'UPDATE_TICKET':
          return {
            ...state,
            tickets: state.tickets.map(ticket =>
              (ticket.id === parseInt(action.payload.id)) ? action.payload : ticket
            ),
       };
      default:
        return state;
    }
  };


  
  export default ticketReducer;
  