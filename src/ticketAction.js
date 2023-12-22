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
  
export const bulkDeleteTickets = (ticketIds) => {
  return {
    type: 'BULK_DELETE_TICKETS',
    payload: ticketIds,
  };
};

export const bulkCloneTickets = (ticketIds) => {
  return {
    type: 'BULK_CLONE_TICKETS',
    payload: ticketIds,
  };
}

export const bulkUpdateTickets = (ticketIds, updates) => {
  return {
    type: 'BULK_UPDATE_TICKETS',
    payload: { ticketIds, updates },
  };
};