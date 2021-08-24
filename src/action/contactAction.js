import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONATCT,
  DELETE_SELECTED_CONTACT
} from "../../src/contant/types";

//actions
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

// get a contact

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// delete contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// SELECT ALL CONATCT
  export const selectAllConatct = (id) => ({
    type: SELECT_CONTACT,
    payload:id
  })

  // clear selected contacts
  export const clearAllContact = () => ({
    type: CLEAR_CONATCT,
    
  })
   // delete selected contacts
   export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACT,
    
  })
  
  
