import { useState } from "react";

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
      case 'BULK_DELETE_TICKETS':
      return {
        ...state,
        tickets: state.tickets.filter(ticket => !action.payload.includes(ticket.id)),
      };

      case 'BULK_CLONE_TICKETS':
      const clonedTickets = state.tickets
        .filter(ticket => action.payload.includes(ticket.id))
        .map((ticket) => ({
          ...ticket,
          id: state.tickets.length+100
          
        }))
      return {
        ...state,
        tickets: [...state.tickets, ...clonedTickets],
      };

      case 'BULK_UPDATE_TICKETS':
      return {
        ...state,
        tickets: state.tickets.map(ticket => {
          if (action.payload.ticketIds.includes(ticket.id)) {
            return {
              ...ticket,
              owner: action.payload.updates.owner || ticket.owner,
              subject: action.payload.updates.subject || ticket.subject,
              status: action.payload.updates.status || ticket.status,
              email: action.payload.updates.email || ticket.email,
              product: action.payload.updates.product || ticket.product,
              account: action.payload.updates.account || ticket.account,
              description: action.payload.updates.description || ticket.description,
            };
          }
          return ticket;
        }),
      };
      default:
        return state;
    }
  };


  
  export default ticketReducer;
  