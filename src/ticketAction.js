export const addTicket = (ticket) => {
    return {
      type: 'ADD_TICKET',
      payload: ticket,
    };
  };

 export const deleteTicket = (ticketId) => {
    return {
      type: 'DELETE_TICKET',
      payload: ticketId,
    };
};

export const updateTicket = (ticket) => {
    return {
      type: 'UPDATE_TICKET',
      payload: ticket,
    };
};
  